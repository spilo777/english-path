// Грамматика урока: блоки объяснения и пошаговая прогулка (walk)

export interface GrammarBlock {
    title: string;
    html: string;
}

export type WalkStep =
    | {
          t: 'idea';
          text: string;
          lit?: [string, string][];
          ex?: [string, string][];
          rows?: string[][];
          bad?: string;
          good?: string;
          tip?: string;
          opt?: boolean;
      }
    | { t: 'check'; q: string; ru?: string; o: string[]; a: number; why?: string };
export interface WalkPart {
    title: string;
    steps: WalkStep[];
}
