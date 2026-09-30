// Настройки (#/settings) и аккаунт (#/account): вход, регистрация, восстановление пароля, синхронизация
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import type { PageProps } from '../app/App';
import { ding, listVoices, speak, YANDEX_VOICE } from '@core/audio';
import { Cloud, type CloudStatus } from '@core/cloud';
import { useCloud } from '@core/cloud/hooks';
import { defaults, getState, normalize, replaceState, update } from '@core/progress';
import { useProgress } from '@core/progress/hooks';
import type { Level } from '@utils/level';
import { go } from '../app/router';
import { Avatar } from '../components/Avatar';
import { Seg } from '../components/Seg';
import { Reminders } from '../components/Reminders';
import { openPlacement } from '../components/Modal';
import { CloudBackups } from '../components/CloudBackups';
import { BackLink, Icon, Loading, Page } from '../components/ui';
import { plural } from '@utils/plural';
import { toast } from '@core/notifications/notify';
import { today } from '@utils/date';
import './Settings.css';

export default function Settings({ params }: PageProps) {
    return (
        <Page className="settings">
            <BackLink href="#/profile" label="Профиль" />
            {params[0] === 'account' ? <Account /> : <SettingsPage />}
        </Page>
    );
}

// ───────── настройки ─────────
const NEW_PER_DAY = [5, 10, 15, 20, 25, 30, 40];
const RATES = [0.7, 0.8, 0.9, 1];
const HELLO = 'Hello! Nice to meet you.';

/** Английские голоса браузера; список приходит асинхронно */
function useVoices(): SpeechSynthesisVoice[] {
    const [v, setV] = useState<SpeechSynthesisVoice[]>(() => listVoices());
    useEffect(() => {
        if (typeof speechSynthesis === 'undefined') return;
        const on = () => setV(listVoices().slice());
        speechSynthesis.addEventListener('voiceschanged', on);
        const t = setTimeout(on, 300);
        return () => {
            speechSynthesis.removeEventListener('voiceschanged', on);
            clearTimeout(t);
        };
    }, []);
    return v;
}

function Check({
    checked,
    onChange,
    children,
}: {
    checked: boolean;
    onChange: (v: boolean) => void;
    children: ReactNode;
}) {
    return (
        <label className="st-check small">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
            <span>{children}</span>
        </label>
    );
}

function SettingsPage() {
    const s = useProgress();
    const st = s.settings;
    const voices = useVoices();
    const [confirmReset, setConfirmReset] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);
    const set = (fn: (x: typeof st) => void, msg?: string) => {
        update((p) => fn(p.settings));
        if (msg) toast(msg);
    };

    const exportBackup = () => {
        update((p) => {
            p.stats.backup = 1;
        });
        const blob = new Blob([JSON.stringify(getState(), null, 1)], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'english-path-backup-' + today() + '.json';
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    };
    const importBackup = (e: ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files && e.target.files[0];
        e.target.value = '';
        if (!f) return;
        const r = new FileReader();
        r.onload = () => {
            try {
                const d: unknown = JSON.parse(String(r.result));
                if (!d || typeof d !== 'object' || !('cards' in d)) throw new Error('bad');
                replaceState(normalize(Object.assign(defaults(), d)));
                toast('Прогресс восстановлен');
            } catch {
                toast('Не удалось прочитать файл');
            }
        };
        r.readAsText(f);
    };
    const reset = () => {
        replaceState(defaults());
        setConfirmReset(false);
        toast('Прогресс стёрт');
        go('#/');
    };

    return (
        <>
            <h1 className="page-title">Настройки</h1>
            <div className="stack st-list">
                <div className="card st-acc">
                    <AccountRow />
                </div>

                <div className="card stack">
                    <h3>Уровень</h3>
                    <div className="st-field st-level">
                        С какого уровня начинать
                        <Seg
                            items={LEVEL_ITEMS}
                            value={st.startLevel || 'A1'}
                            onChange={(l) => {
                                update((p) => {
                                    p.settings.startLevel = l;
                                    p.settings.decks = { ...(p.settings.decks || {}), [l]: true };
                                });
                                toast(l === 'A1' ? 'Уроки идут по порядку с самого начала' : `Уроки до ${l} открыты`);
                            }}
                        />
                    </div>
                    <p className="muted small">
                        Уроки ниже выбранного уровня открываются сразу — их можно проходить для повторения в любом
                        порядке. Выбранный уровень начинается с первого урока, дальше — по порядку, после теста на 80%.
                        Не уверены, какой выбрать?{' '}
                        <button type="button" className="linkish" onClick={openPlacement}>
                            Пройдите тест на уровень
                        </button>
                        {st.placement
                            ? ` (прошлый результат: уровень ${st.placement.known === undefined ? st.placement.level : st.placement.known || 'с нуля'}, начать с ${st.placement.level})`
                            : ''}
                        .
                    </p>
                </div>

                <Reminders />

                <div className="card stack">
                    <h3>Карточки</h3>
                    <label className="st-field">
                        Новых слов в день
                        <select
                            className="input st-select"
                            value={st.newPerDay}
                            onChange={(e) =>
                                set((x) => {
                                    x.newPerDay = +e.target.value;
                                }, 'Сохранено')
                            }
                        >
                            {(NEW_PER_DAY.includes(st.newPerDay)
                                ? NEW_PER_DAY
                                : [...NEW_PER_DAY, st.newPerDay].sort((a, b) => a - b)
                            ).map((n) => (
                                <option key={n} value={n}>
                                    {n}
                                </option>
                            ))}
                        </select>
                    </label>
                    <p className="muted small">
                        15 — спокойный темп (≈ 4000 слов за 9 месяцев), 25 — быстрый (≈ 5 месяцев, но 30–40 минут на
                        повторения в день). Новые слова из уроков идут первыми, затем слова из колод.
                    </p>
                </div>

                <div className="card stack">
                    <h3>Картинки-ассоциации</h3>
                    <Check
                        checked={st.autoImg !== false}
                        onChange={(v) =>
                            set((x) => {
                                x.autoImg = v;
                            }, 'Сохранено')
                        }
                    >
                        Автоматически показывать картинку в карточках
                    </Check>
                    <p className="muted small">
                        Картинка подбирается сама из Википедии и Wikimedia Commons и загружается только при показе
                        карточки — сайт их не хранит, только ссылки. Для абстрактных слов (however, would) картинки
                        обычно нет. Неудачную можно скрыть крестиком или заменить своей.
                    </p>
                </div>

                <div className="card stack">
                    <h3>Озвучка</h3>
                    <Check
                        checked={st.sfx !== false}
                        onChange={(v) => {
                            set((x) => {
                                x.sfx = v;
                            });
                            if (v) ding('ok');
                        }}
                    >
                        Звук при правильном ответе
                    </Check>
                    <Check
                        checked={st.liveVoice !== false}
                        onChange={(v) =>
                            set((x) => {
                                x.liveVoice = v;
                            }, 'Сохранено')
                        }
                    >
                        Живое произношение слов — записи носителей из Викисловаря
                    </Check>
                    <label className="st-field">
                        Акцент для живых записей
                        <select
                            className="input st-select"
                            value={st.accent === 'uk' ? 'uk' : 'us'}
                            onChange={(e) => {
                                const v = e.target.value === 'uk' ? 'uk' : 'us';
                                set((x) => {
                                    x.accent = v;
                                });
                                speak('water');
                            }}
                        >
                            <option value="us">Американский</option>
                            <option value="uk">Британский</option>
                        </select>
                    </label>
                    <div>
                        <button type="button" className="btn small" onClick={() => speak('water')}>
                            <Icon name="speaker-high" /> Проверить: water
                        </button>
                    </div>
                    <p className="muted small">
                        Отдельные слова звучат голосом реального человека, если запись есть (у большинства частых слов
                        есть), и рядом показывается транскрипция. Предложения и слова без записи читает голос Яндекса
                        (после входа в аккаунт) или голос браузера — его можно выбрать ниже.
                    </p>
                    <label className="st-field">
                        Голос
                        <select
                            className="input st-select"
                            value={st.voice || ''}
                            onChange={(e) => {
                                const v = e.target.value;
                                update((p) => {
                                    p.settings.voice = v;
                                    p.stats.voice = 1;
                                });
                                speak(HELLO);
                            }}
                        >
                            <option value="">Автоматически — Яндекс после входа, иначе браузер</option>
                            <option value={YANDEX_VOICE}>Яндекс (SpeechKit, нужен вход)</option>
                            {st.voice && st.voice !== YANDEX_VOICE && !voices.some((v) => v.name === st.voice) ? (
                                <option value={st.voice}>{st.voice}</option>
                            ) : null}
                            {voices.map((v) => (
                                <option key={v.name} value={v.name}>
                                    {v.name} ({v.lang})
                                </option>
                            ))}
                        </select>
                    </label>
                    <label className="st-field">
                        Скорость
                        <select
                            className="input st-select"
                            value={String(st.rate)}
                            onChange={(e) => {
                                const v = +e.target.value;
                                set((x) => {
                                    x.rate = v;
                                });
                                speak(HELLO);
                            }}
                        >
                            {(RATES.includes(st.rate) ? RATES : [...RATES, st.rate].sort((a, b) => a - b)).map((r) => (
                                <option key={r} value={String(r)}>
                                    {r}×
                                </option>
                            ))}
                        </select>
                    </label>
                    <div>
                        <button type="button" className="btn small" onClick={() => speak(HELLO)}>
                            <Icon name="speaker-high" /> Проверить: {HELLO}
                        </button>
                    </div>
                    <p className="muted small">
                        На Mac самые живые голоса — Samantha, Ava, Zoe (можно скачать в Системных настройках{' '}
                        <Icon name="arrow-right" /> Универсальный доступ <Icon name="arrow-right" /> Устный контент).
                    </p>
                </div>

                <CloudBackups />

                <div className="card stack">
                    <h3>Копия в файле</h3>
                    <p className="muted small">
                        Прогресс хранится в этом браузере. Периодически сохраняйте копию в файл — так его можно
                        перенести на другое устройство или восстановить.
                    </p>
                    <div className="row">
                        <button type="button" className="btn" onClick={exportBackup}>
                            <Icon name="download-simple" /> Скачать копию
                        </button>
                        <button type="button" className="btn" onClick={() => fileRef.current?.click()}>
                            <Icon name="upload-simple" /> Загрузить из файла
                        </button>
                        <input
                            ref={fileRef}
                            type="file"
                            accept="application/json,.json"
                            hidden
                            onChange={importBackup}
                            data-testid="st-import"
                        />
                    </div>
                </div>

                <div className="card stack">
                    <h3>Сброс</h3>
                    {confirmReset ? (
                        <div className="st-confirm" role="alert">
                            <p>
                                <b>Точно стереть весь прогресс?</b> Это нельзя отменить: карточки, уроки, достижения и
                                настройки удалятся из этого браузера.
                            </p>
                            <div className="row">
                                <button type="button" className="btn st-danger-fill" onClick={reset}>
                                    Да, стереть
                                </button>
                                <button type="button" className="btn ghost" onClick={() => setConfirmReset(false)}>
                                    Отмена
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <button type="button" className="btn st-danger" onClick={() => setConfirmReset(true)}>
                                Стереть весь прогресс
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

/** Строка аккаунта в настройках */
function AccountRow() {
    const st = useCloud();
    const user = Cloud.enabled ? st.user : null;
    return user ? (
        <a className="acc-row" href="#/account">
            <Avatar email={user.email || '?'} size="sm" />
            <div className="st-grow">
                <b className="st-ellipsis">{user.email || ''}</b>
                <div className="small muted">
                    {st.lastError ? (
                        'Ошибка синхронизации'
                    ) : (
                        <>
                            <Icon name="cloud" /> Синхронизировано
                        </>
                    )}
                </div>
            </div>
            <Icon name="caret-right" className="muted" />
        </a>
    ) : (
        <a className="acc-row" href="#/account">
            <Avatar size="sm" icon="cloud" off />
            <div className="st-grow">
                <b>Войти или создать аккаунт</b>
                <div className="small muted">Чтобы прогресс был на всех устройствах</div>
            </div>
            <Icon name="caret-right" className="muted" />
        </a>
    );
}

// ───────── аккаунт ─────────
type AuthMode = 'up' | 'in' | 'sent' | 'forgot' | 'forgot-sent' | 'reset';
// режим и почта переживают уход со страницы (как в старой версии)
let savedMode: AuthMode = 'up';
let savedEmail = '';

const authErr = (e: unknown): string => {
    const m = String(e && typeof e === 'object' && 'message' in e ? (e as { message: unknown }).message : e);
    if (/Invalid login/i.test(m)) return 'Неверный email или пароль.';
    if (/not confirmed/i.test(m))
        return 'Почта ещё не подтверждена. Откройте письмо и нажмите ссылку — или отправьте письмо ещё раз.';
    if (/already registered|already exists/i.test(m))
        return 'Аккаунт с этой почтой уже есть. Перейдите на вкладку «Вход».';
    if (/Password should|at least 6/i.test(m)) return 'Пароль слишком короткий — нужно минимум 6 символов.';
    if (/valid email|invalid.*email|email.*invalid/i.test(m)) return 'Похоже, в адресе почты опечатка.';
    // лимит писем Supabase — часовой на весь проект: повторять через минуту бесполезно
    if (/email rate limit/i.test(m))
        return 'Сейчас не получается отправить письмо для подтверждения — сервис писем перегружен. Попробуйте позже; заниматься можно и без аккаунта, прогресс сохранится на этом устройстве.';
    if (/rate limit|too many|security purposes/i.test(m))
        return 'Слишком много попыток. Подождите минуту и попробуйте снова.';
    if (/same.*password|different from the old/i.test(m)) return 'Новый пароль должен отличаться от старого.';
    if (/fetch|network/i.test(m)) return 'Нет связи с сервером. Проверьте интернет.';
    return m;
};
const validEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const LEVEL_ITEMS: [Level, string][] = [
    ['A1', 'A1'],
    ['A2', 'A2'],
    ['B1', 'B1'],
    ['B2', 'B2'],
];
const wide = () => typeof window !== 'undefined' && window.innerWidth > 760;

function Account() {
    const st = useCloud();
    useEffect(() => {
        Cloud.init();
    }, []); // страница аккаунта — облако нужно сразу
    const [mode, setModeRaw] = useState<AuthMode>(savedMode);
    const [linkErr, setLinkErr] = useState('');
    const setMode = (m: AuthMode) => {
        savedMode = m;
        setModeRaw(m);
    };
    // событие из ссылки письма: восстановление пароля, подтверждение почты, ошибка ссылки
    useEffect(() => {
        const ev = Cloud.takeAuthEvent();
        if (ev === 'recovery') setMode('reset');
        if (ev === 'confirmed') setTimeout(() => toast('Почта подтверждена — вы вошли'), 300);
        if (ev && ev.startsWith('link-error:')) setLinkErr(ev.slice(11));
    }, []);

    if (!Cloud.enabled && st.loading) return <Loading what="Подключаюсь к облаку…" />;
    if (!Cloud.enabled) {
        return (
            <div className="auth-wrap">
                <div className="card auth-card">
                    <div className="auth-ico">
                        <Icon name="cloud" />
                    </div>
                    <h1>Аккаунт</h1>
                    <p className="muted">
                        Облако сейчас недоступно — проверьте интернет и обновите страницу. Всё, что вы делаете,
                        продолжает сохраняться в этом браузере.
                    </p>
                </div>
            </div>
        );
    }
    if (st.user && mode !== 'reset')
        return <AccountPage st={st} onChangePw={() => setMode('reset')} onSignedOut={() => setMode('in')} />;
    return <AuthForms key={mode} mode={mode} setMode={setMode} linkErr={linkErr} st={st} />;
}

const TITLES: Record<AuthMode, [string, string]> = {
    up: ['Создайте аккаунт', 'Прогресс будет сохраняться в облаке и совпадать на Mac и iPhone.'],
    in: ['С возвращением', 'Войдите, чтобы продолжить с того же места.'],
    sent: ['', ''],
    forgot: ['Восстановление пароля', ''],
    'forgot-sent': ['', ''],
    reset: ['Новый пароль', ''],
};

function AuthForms({
    mode,
    setMode,
    linkErr,
    st,
}: {
    mode: AuthMode;
    setMode: (m: AuthMode) => void;
    linkErr: string;
    st: CloudStatus;
}) {
    const [email, setEmail] = useState(savedEmail);
    const [pass, setPass] = useState('');
    const [showPw, setShowPw] = useState(false);
    const [err, setErr] = useState('');
    const [busy, setBusy] = useState('');
    const [resent, setResent] = useState(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);
    const alive = useRef(true);
    useEffect(() => {
        alive.current = true;
        return () => {
            alive.current = false;
        };
    }, []);
    useEffect(() => {
        if (!resent) return;
        const t = setTimeout(() => setResent(false), 60000);
        return () => clearTimeout(t);
    }, [resent]);

    const hasEmail = mode === 'up' || mode === 'in' || mode === 'forgot';
    const hasPass = mode === 'up' || mode === 'in' || mode === 'reset';
    const switchTo = (m: AuthMode) => {
        savedEmail = email.trim() || savedEmail;
        setMode(m);
    };
    const onEmail = (v: string) => {
        setEmail(v);
        savedEmail = v.trim();
    };

    const submit = async (ev: FormEvent) => {
        ev.preventDefault();
        setErr('');
        const em = email.trim();
        if (hasEmail && !validEmail(em)) {
            setErr('Введите почту в формате name@example.com.');
            emailRef.current?.focus();
            return;
        }
        if (hasPass && pass.length < 6) {
            setErr('Пароль — минимум 6 символов.');
            passRef.current?.focus();
            return;
        }
        if (em) savedEmail = em;
        try {
            if (mode === 'up') {
                setBusy('Создаю аккаунт…');
                const r = await Cloud.signUp(em, pass);
                if (r.needsConfirm) setMode('sent');
                else {
                    toast('Аккаунт создан');
                    savedMode = 'in';
                }
            } else if (mode === 'in') {
                setBusy('Вхожу…');
                await Cloud.signIn(em, pass);
                toast('Вы вошли — прогресс синхронизируется');
            } else if (mode === 'forgot') {
                setBusy('Отправляю…');
                await Cloud.resetPassword(em);
                setMode('forgot-sent');
            } else if (mode === 'reset') {
                setBusy('Сохраняю…');
                await Cloud.updatePassword(pass);
                toast('Пароль изменён');
                setMode('in');
            }
            if (alive.current) setBusy('');
        } catch (e) {
            if (!alive.current) return;
            setBusy('');
            const m = authErr(e);
            if (mode === 'in' && /не подтверждена/.test(m)) {
                setMode('sent');
                return;
            }
            setErr(m);
        }
    };
    const resend = async () => {
        setErr('');
        setBusy('Отправляю…');
        try {
            await Cloud.resendConfirm(savedEmail);
            if (alive.current) {
                setBusy('');
                setResent(true);
            }
        } catch (e) {
            if (alive.current) {
                setBusy('');
                setErr(authErr(e));
            }
        }
    };

    const errBox = (
        <div className={'auth-err' + (err ? ' show' : '')} role="alert">
            {err}
        </div>
    );
    const cta = (label: string) => (
        <button className="btn primary auth-cta" type="submit" disabled={!!busy}>
            {busy ? (
                <>
                    <span className="spin" />
                    {busy}
                </>
            ) : (
                label
            )}
        </button>
    );
    const modeLink = (m: AuthMode, children: ReactNode) => (
        <button type="button" className="auth-link" onClick={() => switchTo(m)}>
            {children}
        </button>
    );
    const emailField = (label: string) => (
        <label className="fld">
            <span>{label}</span>
            <input
                ref={emailRef}
                className="input"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => onEmail(e.target.value)}
                autoFocus={wide() && !email}
                required
            />
        </label>
    );
    const passField = (label: ReactNode, placeholder: string, auto: string, focus: boolean) => (
        // div, а не label: внутри кнопки («Забыли пароль?», глазик) — label привязался бы к ним, а не к полю
        <div className="fld">
            <span>{label}</span>
            <div className="pw">
                <input
                    ref={passRef}
                    className="input"
                    aria-label={placeholder}
                    type={showPw ? 'text' : 'password'}
                    autoComplete={auto}
                    placeholder={placeholder}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    autoFocus={focus}
                    required
                />
                <button
                    type="button"
                    className={'pw-eye' + (showPw ? ' on' : '')}
                    aria-label={showPw ? 'Скрыть пароль' : 'Показать пароль'}
                    onClick={() => {
                        setShowPw(!showPw);
                        passRef.current?.focus();
                    }}
                >
                    <Icon name={showPw ? 'eye-slash' : 'eye'} />
                </button>
            </div>
        </div>
    );

    let body: ReactNode = null;
    if (mode === 'up' || mode === 'in') {
        const up = mode === 'up';
        body = (
            <form className="auth-form" noValidate onSubmit={submit}>
                {emailField('Почта')}
                {passField(
                    up ? (
                        <>
                            Пароль <i className="muted">минимум 6 символов</i>
                        </>
                    ) : (
                        <>Пароль {modeLink('forgot', 'Забыли пароль?')}</>
                    ),
                    up ? 'Придумайте пароль' : 'Ваш пароль',
                    up ? 'new-password' : 'current-password',
                    wide() && !!email,
                )}
                {errBox}
                {cta(up ? 'Создать аккаунт' : 'Войти')}
                <p className="tiny muted auth-foot">
                    {up ? (
                        <>Уже есть аккаунт? {modeLink('in', 'Войти')}</>
                    ) : (
                        <>Ещё нет аккаунта? {modeLink('up', 'Зарегистрироваться')}</>
                    )}
                </p>
            </form>
        );
    } else if (mode === 'sent') {
        body = (
            <div className="auth-state">
                <div className="auth-big">
                    <Icon name="envelope-simple-open" />
                </div>
                <h2>Проверьте почту</h2>
                <p className="muted">
                    Мы отправили письмо на <b>{savedEmail}</b>. Нажмите в нём ссылку «Confirm your mail» — сайт
                    откроется, и вы сразу окажетесь в аккаунте.
                </p>
                <p className="tiny muted">Письма нет пару минут? Загляните в «Спам» или «Промоакции».</p>
                {errBox}
                <button type="button" className="btn primary auth-cta" disabled={!!busy || resent} onClick={resend}>
                    {busy ? (
                        <>
                            <span className="spin" />
                            {busy}
                        </>
                    ) : resent ? (
                        <>
                            <Icon name="check" /> Письмо отправлено ещё раз
                        </>
                    ) : (
                        'Отправить письмо ещё раз'
                    )}
                </button>
                <p className="tiny muted auth-foot">
                    Уже подтвердили на другом устройстве? {modeLink('in', 'Войти')} · {modeLink('up', 'Другая почта')}
                </p>
            </div>
        );
    } else if (mode === 'forgot') {
        body = (
            <form className="auth-form" noValidate onSubmit={submit}>
                <p className="muted small auth-lead">
                    Пришлём письмо со ссылкой — по ней можно задать новый пароль. Прогресс не пострадает.
                </p>
                {emailField('Почта аккаунта')}
                {errBox}
                {cta('Отправить ссылку')}
                <p className="tiny muted auth-foot">
                    {modeLink(
                        'in',
                        <>
                            <Icon name="arrow-left" /> Назад ко входу
                        </>,
                    )}
                </p>
            </form>
        );
    } else if (mode === 'forgot-sent') {
        body = (
            <div className="auth-state">
                <div className="auth-big">
                    <Icon name="key" />
                </div>
                <h2>Письмо отправлено</h2>
                <p className="muted">
                    Ссылка для нового пароля ушла на <b>{savedEmail}</b>. Откройте её на этом устройстве.
                </p>
                <p className="tiny muted auth-foot">
                    {modeLink(
                        'in',
                        <>
                            <Icon name="arrow-left" /> Назад ко входу
                        </>,
                    )}
                </p>
            </div>
        );
    } else {
        body = (
            <form className="auth-form" noValidate onSubmit={submit}>
                <p className="muted small auth-lead">
                    {st.user
                        ? 'Придумайте новый пароль для ' + (st.user.email || '') + '.'
                        : 'Ссылка устарела. Запросите новую.'}
                </p>
                {passField(
                    <>
                        Новый пароль <i className="muted">минимум 6 символов</i>
                    </>,
                    'Новый пароль',
                    'new-password',
                    wide(),
                )}
                {errBox}
                {cta('Сохранить пароль')}
                {st.user ? (
                    <p className="tiny muted auth-foot">
                        <button type="button" className="auth-link" onClick={() => setMode('in')}>
                            Отмена
                        </button>
                    </p>
                ) : null}
            </form>
        );
    }

    const [title, sub] = TITLES[mode];
    const tabs = mode === 'up' || mode === 'in';
    return (
        <div className="auth-wrap">
            <div className="card auth-card">
                {title ? (
                    <>
                        <div className="auth-ico">
                            <Icon name="cloud" />
                        </div>
                        <h1>{title}</h1>
                        {sub ? <p className="muted auth-sub">{sub}</p> : null}
                    </>
                ) : null}
                {linkErr ? (
                    <div className="auth-err show auth-link-err">
                        Ссылка из письма не сработала: {linkErr}. Запросите новую.
                    </div>
                ) : null}
                {tabs ? (
                    <Seg<AuthMode>
                        className="auth-seg"
                        items={[
                            ['up', 'Регистрация'],
                            ['in', 'Вход'],
                        ]}
                        value={mode}
                        onChange={switchTo}
                    />
                ) : null}
                {body}
            </div>
            {tabs ? (
                <>
                    <div className="auth-perks">
                        <div>
                            <span>
                                <Icon name="devices" />
                            </span>
                            <b>Одно обучение на всех устройствах</b>
                            <small>Начали на Mac — продолжили в метро с iPhone</small>
                        </div>
                        <div>
                            <span>
                                <Icon name="lifebuoy" />
                            </span>
                            <b>Прогресс не потеряется</b>
                            <small>Даже если очистить браузер или сменить телефон</small>
                        </div>
                        <div>
                            <span>
                                <Icon name="trophy" />
                            </span>
                            <b>Настоящая редкость достижений</b>
                            <small>Сравнение с другими учениками</small>
                        </div>
                    </div>
                    <p className="tiny muted auth-note">
                        Без аккаунта всё тоже работает — прогресс хранится в этом браузере.
                    </p>
                </>
            ) : null}
        </div>
    );
}

function AccountPage({
    st,
    onChangePw,
    onSignedOut,
}: {
    st: CloudStatus;
    onChangePw: () => void;
    onSignedOut: () => void;
}) {
    const s = useProgress();
    const [confirmOut, setConfirmOut] = useState(false);
    const [syncing, setSyncing] = useState(false);
    const email = (st.user && st.user.email) || '';
    const cards = Object.keys(s.cards).length,
        days = Object.keys(s.activity).length,
        ach = Object.keys(s.ach).length;
    const sync = async () => {
        setSyncing(true);
        await Cloud.pull();
        setSyncing(false);
        toast(Cloud.status().lastError ? 'Не получилось — проверьте интернет' : 'Синхронизировано');
    };
    const signOut = async () => {
        setConfirmOut(false);
        try {
            await Cloud.signOut();
            toast('Вы вышли');
        } catch (e) {
            toast(authErr(e));
        }
        savedMode = 'in';
        onSignedOut();
    };
    const busy = st.pushing || st.pulling;
    return (
        <div className="auth-wrap">
            <div className="card auth-card">
                <div className="acc-head">
                    <Avatar email={email || '?'} />
                    <div className="st-grow">
                        <b className="acc-mail">{email}</b>
                        <div className={'small' + (st.lastError ? ' st-bad' : ' muted')}>
                            {st.lastError ? (
                                <>
                                    <Icon name="warning" /> Не удалось синхронизировать
                                </>
                            ) : busy ? (
                                <>
                                    <Icon name="arrows-clockwise" /> Синхронизация…
                                </>
                            ) : (
                                <>
                                    <Icon name="cloud" /> Всё сохранено в облаке
                                    {st.lastSync
                                        ? ' · ' +
                                          st.lastSync.toLocaleTimeString('ru-RU', {
                                              hour: '2-digit',
                                              minute: '2-digit',
                                          })
                                        : ''}
                                </>
                            )}
                        </div>
                    </div>
                </div>
                {st.lastError ? (
                    <div className="auth-err show acc-err">
                        {authErr(st.lastError)} Прогресс в безопасности в этом браузере и отправится, когда связь
                        вернётся.
                    </div>
                ) : null}
                <div className="acc-stats">
                    <div>
                        <b>{cards}</b>
                        <span>слов</span>
                    </div>
                    <div>
                        <b>{days}</b>
                        <span>{plural(days, 'день', 'дня', 'дней')}</span>
                    </div>
                    <div>
                        <b>{ach}</b>
                        <span>достижений</span>
                    </div>
                </div>
                <p className="small muted">
                    Войдите с этой почтой на iPhone или другом компьютере — прогресс подтянется автоматически.
                    Синхронизация идёт сама, кнопка ниже нужна только если хочется обновить прямо сейчас.
                </p>
                {confirmOut ? (
                    <div className="st-confirm" role="alert">
                        <p>
                            <b>Выйти из аккаунта?</b> Прогресс останется и в облаке, и в этом браузере.
                        </p>
                        <div className="row">
                            <button type="button" className="btn st-danger-fill" onClick={signOut}>
                                Выйти
                            </button>
                            <button type="button" className="btn ghost" onClick={() => setConfirmOut(false)}>
                                Отмена
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="acc-actions">
                        <button type="button" className="btn" onClick={sync} disabled={syncing}>
                            <Icon name="arrows-clockwise" /> {syncing ? 'Синхронизирую…' : 'Синхронизировать'}
                        </button>
                        <button type="button" className="btn ghost" onClick={onChangePw}>
                            Сменить пароль
                        </button>
                        <button type="button" className="btn ghost st-danger" onClick={() => setConfirmOut(true)}>
                            Выйти
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
