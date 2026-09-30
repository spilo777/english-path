// Какой текст открыт по адресу #/read/<id>: статья библиотеки (lib-, dlg-), текст урока (t-<урок>-N), свой (u-…)

/** Урок, к которому относится текст урока: t-a1-3-2 → a1-3; не текст урока — null */
export function textUnitId(id: string): string | null {
    const m = /^t-(.+)-\d+$/.exec(id);
    return m ? m[1] : null;
}
