import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('./src', import.meta.url));

// BASE задаётся в CI: /english-path/ для боевого сайта, /english-path/next/ для предпросмотра
export default defineConfig({
    base: process.env.BASE || './',
    plugins: [react()],
    // слои приложения: @utils, @core, @content, @engine, @catalog (те же пути — в tsconfig.json)
    resolve: { alias: [{ find: /^@(utils|core|content|engine|catalog)(?=\/|$)/, replacement: src + '/$1' }] },
    build: { outDir: 'dist', sourcemap: true, chunkSizeWarningLimit: 800 },
    test: { environment: 'jsdom', include: ['tests/**/*.test.ts'] },
} as never);
