// React: движок в контексте приложения
import { createContext, useContext, type ReactNode } from 'react';
import type { ENEngine } from './engine';
import type { CategoryDef, CollectionDef, CourseDef } from './types';

const EngineContext = createContext<ENEngine | null>(null);

export function EngineProvider({ engine, children }: { engine: ENEngine; children: ReactNode }) {
    return <EngineContext.Provider value={engine}>{children}</EngineContext.Provider>;
}

export function useEngine(): ENEngine {
    const e = useContext(EngineContext);
    if (!e) throw new Error('useEngine: нет <EngineProvider>');
    return e;
}

export const useCollectionDef = (id: string): CollectionDef | undefined => useEngine().collection(id);
export const useCourseDef = (id: string): CourseDef | undefined => useEngine().course(id);
export const useCategoryDef = (id: string): CategoryDef | undefined => useEngine().category(id);
