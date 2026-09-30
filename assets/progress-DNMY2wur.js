const a=o=>o.chapters||0;function c(o,s){let t=0;for(let e=0;e<a(s);e++)o.textsRead[s.id+"#"+e]&&t++;return t}function d(o,s){const t={done:0,started:0,chapters:0,words:0};for(const e of s){const r=a(e),n=c(o,e);!r||!n||(t.chapters+=n,t.words+=Math.round((e.words||0)*n/r),n>=r?t.done++:t.started++)}return t}export{a,d as b,c};
//# sourceMappingURL=progress-DNMY2wur.js.map
