// Границы слоёв (build/APP_ARCH.md): импорты идут только вниз.
//   utils (0) ← core (1) ← content (2) ← engine (3) ← catalog (4) ← интерфейс: app, pages, components, lib (5)
// В слоях 0–3 React подключают только файлы hooks.ts(x) / react.tsx, CSS — только интерфейс.
import { describe, expect, it } from 'vitest';

const code = import.meta.glob<string>('../src/**/*.{ts,tsx}', { query: '?raw', import: 'default', eager: true });

const RANK: Record<string, number> = { utils: 0, core: 1, content: 2, engine: 3, catalog: 4 };
const UI = 5;
const REACT_OK = /\/(hooks\.tsx?|react\.tsx)$/;

/** Слой файла по пути вида ../src/<dir>/... */
function layerOf(file: string): number {
    const m = /(?:^|\/)src\/([^/]+)\//.exec(file);
    return m && m[1] in RANK ? RANK[m[1]] : UI;
}

function resolveRel(from: string, spec: string): string {
    const parts = from.split('/').slice(0, -1);
    for (const seg of spec.split('/')) {
        if (seg === '..') parts.pop();
        else if (seg !== '.') parts.push(seg);
    }
    return parts.join('/') + '/';
}

/** Нарушения границ в одном файле: [спецификатор, причина] */
function violations(file: string, src: string): string[] {
    const me = layerOf(file);
    if (me === UI) return [];
    const out: string[] = [];
    const specs = [...src.matchAll(/(?:\bfrom\s*|\bimport\s*\(\s*|^\s*import\s+)'([^']+)'/gm)].map((m) => m[1]);
    for (const s of specs) {
        let target: number | null = null;
        const alias = /^@(utils|core|content|engine|catalog)(?:\/|$)/.exec(s);
        if (alias) target = RANK[alias[1]];
        else if (s.startsWith('.')) target = layerOf(resolveRel(file, s));
        if (target !== null && target > me) out.push(`${s} (слой ${target} выше ${me})`);
        if (/\.css$/.test(s)) out.push(`${s} (CSS только в интерфейсе)`);
        if (/^react(-dom)?(\/|$)/.test(s) && (me === 0 || !REACT_OK.test(file)))
            out.push(`${s} (React только в hooks.ts / react.tsx)`);
    }
    return out;
}

// [файл, строка импорта, сколько нарушений должно найтись]
const CASES: [string, string, number][] = [
    ['../src/utils/date.ts', "import { x } from '../core/progress/store';", 1],
    ['../src/core/srs/deck.ts', "import { x } from '@content/word-cards';", 1],
    ['../src/content/texts/a1.ts', "import { e } from '@engine';", 1],
    ['../src/engine/course.ts', "import { e } from '../catalog/index';", 1],
    ['../src/core/cloud/sync.ts', "import { toast } from '../../components/ui';", 1],
    ['../src/core/audio/speech.ts', "import { useState } from 'react';", 1],
    ['../src/utils/hooks.ts', "import { useState } from 'react';", 1],
    ['../src/content/texts/x.ts', "import './x.css';", 1],
    ['../src/core/audio/hooks.ts', "import { useState } from 'react';", 0],
    ['../src/engine/react.tsx', "import { createContext } from 'react';", 0],
    ['../src/content/texts/a1.ts', "import { d } from '../../core/data/loader';", 0],
    ['../src/catalog/index.ts', "import { A1_WordCards } from '@content/word-cards';", 0],
    ['../src/pages/Course.tsx', "import { engine } from '@catalog';", 0],
];

describe('границы слоёв', () => {
    it('проверка сама ловит нарушения', () => {
        for (const [file, src, n] of CASES) expect(violations(file, src).length, file + ': ' + src).toBe(n);
    });

    it('импорты в слоях идут только вниз', () => {
        const bad: string[] = [];
        for (const [f, src] of Object.entries(code)) for (const v of violations(f, src)) bad.push(`${f}: ${v}`);
        expect(bad).toEqual([]);
    });
});
