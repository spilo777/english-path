import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE задаётся в CI: /english-path/ для боевого сайта, /english-path/next/ для предпросмотра
export default defineConfig({
    base: process.env.BASE || './',
    plugins: [react()],
    build: { outDir: 'dist', sourcemap: true, chunkSizeWarningLimit: 800 },
    test: { environment: 'jsdom', include: ['tests/**/*.test.ts'] },
} as never);
