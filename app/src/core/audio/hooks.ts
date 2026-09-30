// React: транскрипция и наличие живой записи
import { useEffect, useState } from 'react';
import { getState } from '../progress/store';
import { knownLive, liveAudio, liveEligible } from './live';

const settings = () => getState().settings;

/** Транскрипция слова и есть ли живая запись (для метки «живой голос») */
export function useIpa(word: string): { ipa?: string; live: boolean } {
    const on = settings().liveVoice !== false && !!word && liveEligible(word.trim());
    const [st, setSt] = useState<{ w: string; ipa?: string; live: boolean }>(() => {
        const a = on ? knownLive(word) : null;
        return { w: word, ipa: a?.ipa || undefined, live: !!a?.u };
    });
    useEffect(() => {
        if (!on) {
            setSt({ w: word, live: false });
            return;
        }
        let alive = true;
        liveAudio(word.trim()).then((a) => {
            if (alive) setSt({ w: word, ipa: a?.ipa || undefined, live: !!a?.u });
        });
        return () => {
            alive = false;
        };
    }, [word, on]);
    return st.w === word ? { ipa: st.ipa, live: st.live } : { live: false };
}
