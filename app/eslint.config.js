// Базовый ESLint: рекомендованные правила JS и TypeScript, правила хуков React.
// Форматированием занимается Prettier — eslint-config-prettier отключает спорящие с ним правила.
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

// Слои: импорты только вниз (utils ← core ← content ← engine ← catalog ← интерфейс).
// Полная проверка, включая относительные пути, — tests/boundaries.test.ts; здесь подсказка в редакторе по псевдонимам.
const LAYERS = ['utils', 'core', 'content', 'engine', 'catalog'];
const layerRules = LAYERS.slice(0, -1).map((layer, i) => ({
    files: [`src/${layer}/**/*.{ts,tsx}`],
    rules: {
        'no-restricted-imports': [
            'warn',
            {
                ...(layer === 'utils' ? { paths: ['react', 'react-dom'] } : {}),
                patterns: [
                    {
                        group: LAYERS.slice(i + 1).flatMap((up) => [`@${up}`, `@${up}/*`]),
                        message: `Слой ${layer} не импортирует слои выше (см. build/APP_ARCH.md).`,
                    },
                ],
            },
        ],
    },
}));

export default tseslint.config(
    { ignores: ['dist', 'node_modules', 'test-results', 'playwright-report', 'public'] },
    {
        files: ['**/*.{ts,tsx}'],
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        languageOptions: { ecmaVersion: 2022, globals: globals.browser },
        plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
        rules: {
            // параметры и переменные с _ в начале — намеренно не используются
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        },
    },
    ...layerRules,
    prettier,
);
