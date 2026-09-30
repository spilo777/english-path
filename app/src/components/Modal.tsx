// Модальное окно: поверх страницы, закрывается крестиком, кликом по фону и Esc; страница под ним не прокручивается.
// Здесь же — открытие теста на уровень из любого места сайта (openPlacement()).
import { lazy, Suspense, useEffect, useRef, useSyncExternalStore, type ReactNode } from 'react';
import { Icon, Loading } from './ui';
import './Modal.css';

export function Modal({ onClose, children, label }: { onClose: () => void; children: ReactNode; label: string }) {
    const box = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const key = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', key);
        box.current?.focus({ preventScroll: true });
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener('keydown', key);
        };
    }, [onClose]);
    return (
        <div
            className="modal-back"
            onMouseDown={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="modal-box" role="dialog" aria-modal="true" aria-label={label} tabIndex={-1} ref={box}>
                <button type="button" className="icon-btn modal-x" aria-label="Закрыть" onClick={onClose}>
                    <Icon name="x" />
                </button>
                {children}
            </div>
        </div>
    );
}

// ───────── тест на уровень в модальном окне ─────────
let placementOpen = false;
const subs = new Set<() => void>();
const emit = () => subs.forEach((f) => f());
export function openPlacement() {
    placementOpen = true;
    emit();
}
export function closePlacement() {
    placementOpen = false;
    emit();
}

const Flow = lazy(() => import('../pages/Placement').then((m) => ({ default: m.PlacementFlow })));

/** Рендерится один раз в AppChrome */
export function PlacementModalHost() {
    const open = useSyncExternalStore(
        (f) => {
            subs.add(f);
            return () => {
                subs.delete(f);
            };
        },
        () => placementOpen,
    );
    if (!open) return null;
    return (
        <Modal onClose={closePlacement} label="Тест на уровень">
            <Suspense fallback={<Loading />}>
                <Flow modal onClose={closePlacement} />
            </Suspense>
        </Modal>
    );
}
