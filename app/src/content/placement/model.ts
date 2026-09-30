// Тест на уровень: вопросы по ступеням (placement.json)

/** Вопрос теста на уровень: q — фраза с ___ или вопрос, ru — перевод/подсказка, o — варианты, a — индекс верного */
export interface PlacementQ {
    q: string;
    ru?: string;
    o: string[];
    a: number;
}
export type PlacementBank = Record<'A1' | 'A2' | 'B1' | 'B2', PlacementQ[]>;
