import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { engine } from './catalog';
import { EngineProvider } from './engine/react';
import './styles/tokens.css';
import './styles/base.css';
import './styles/icons.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <EngineProvider engine={engine}>
            <App />
        </EngineProvider>
    </StrictMode>,
);

// кеш для мгновенных повторных заходов и работы без сети (public/sw.js)
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(new URL('sw.js', document.baseURI)).catch(() => undefined);
    });
}
