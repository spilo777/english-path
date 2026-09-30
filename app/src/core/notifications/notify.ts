// Всплывающие сообщения (тосты) без React: core сообщает, интерфейс (Toaster) показывает
let msg = '';
let key = 0;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

/** Показать короткое сообщение на 2,4 с */
export function toast(text: string) {
    msg = text;
    key++;
    emit();
    clearTimeout(timer);
    timer = setTimeout(() => {
        msg = '';
        key++;
        emit();
    }, 2400);
}

/** Текущее сообщение ('' — нет) и его номер (меняется при каждом показе и скрытии) */
export const toastMessage = () => msg;
export const toastVersion = () => key;

export function onToast(l: () => void) {
    listeners.add(l);
    return () => {
        listeners.delete(l);
    };
}
