// iOS/Safari разрешает звук только в ответ на действие пользователя: общая подписка на касания и клавиши.
// Каждый модуль звука вешает сюда своё «пробуждение» (AudioContext, общий <audio>, синтез речи).
const handlers = new Set<() => void>();
let installed = false;

function fire() {
    handlers.forEach((h) => h());
}

/** Вызывать fn на каждом касании/клике/нажатии клавиши (в фазе перехвата) */
export function onGesture(fn: () => void) {
    handlers.add(fn);
    if (installed || typeof document === 'undefined') return;
    installed = true;
    ['touchend', 'click', 'keydown'].forEach((ev) =>
        document.addEventListener(ev, fire, { capture: true, passive: true }),
    );
}
