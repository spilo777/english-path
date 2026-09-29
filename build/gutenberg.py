#!/usr/bin/env python3
"""Текст Project Gutenberg (общественное достояние) → книга-оригинал сайта (legacy/data/books/bk-o-<slug>.js) + запись в index.js.
Запуск: python3 build/gutenberg.py <файл.txt> <id> <level> <heading-regex> '<meta json>'
meta: {"title":..,"author":..,"wiki":..,"ru":..}
"""
import json, re, sys, pathlib

src, bid, level, head_re = sys.argv[1:5]
meta = json.loads(sys.argv[5])
NOSUB = '--nosub' in sys.argv  # у глав нет подзаголовков — не склеивать следующую строку
root = pathlib.Path(__file__).resolve().parent.parent / 'legacy/data/books'

raw = pathlib.Path(src).read_text(encoding='utf-8', errors='replace').replace('\r', '')
m1 = re.search(r'\*\*\* ?START OF (THE|THIS) PROJECT GUTENBERG[^\n]*\n', raw)
m2 = re.search(r'\*\*\* ?END OF (THE|THIS) PROJECT GUTENBERG', raw)
body = raw[m1.end() if m1 else 0: m2.start() if m2 else len(raw)]
lines = body.split('\n')
H = re.compile(head_re)

heads = [i for i, l in enumerate(lines) if H.match(l.strip())]

def clean_par(p: str) -> str:
    p = re.sub(r'\s+', ' ', p).strip()
    p = re.sub(r'_(.+?)_', r'\1', p)
    p = re.sub(r'^\|', '', p)  # след буквицы
    return p

sections = []
for k, i in enumerate(heads):
    end = heads[k + 1] if k + 1 < len(heads) else len(lines)
    title = lines[i].strip().rstrip('.')
    j = i + 1
    while j < end and not lines[j].strip():
        j += 1
    # подзаголовок главы на следующей строке (короткий, без точки в конце)
    if not NOSUB and j < end and not lines[j].strip().startswith('[') and len(lines[j].strip()) < 70 and not re.search(r'[.,;:!?"”’]$', lines[j].strip()) and not re.match(r'^[a-z]', lines[j].strip()):
        if re.fullmatch(r'(CHAPTER|Chapter)\s+[IVXLC\d]+\.?|[IVXLC]+\.?', title):
            title = title + '. ' + lines[j].strip().rstrip('.')
            j += 1
    if re.fullmatch(r'[IVXLC]+', title):
        title = 'Chapter ' + title
    text = '\n'.join(lines[j:end])
    pars = [clean_par(p) for p in re.split(r'\n\s*\n', text)]
    pars = [p for p in pars if p and not p.startswith('[Illustration') and not re.fullmatch(r'[*\s.]+', p)]
    # подзаголовок-абзац ЗАГЛАВНЫМИ («IN WHICH …») — в название главы
    if pars and len(pars[0]) < 200 and pars[0] == pars[0].upper() and re.search(r'[A-Z]{3}', pars[0]) and '. ' not in title:
        title = title + '. ' + pars[0].rstrip('.')
        pars = pars[1:]
    words = sum(len(p.split()) for p in pars)
    if words < 250:  # оглавление и пустые заголовки
        continue
    sections.append({'title': re.sub(r'\s+', ' ', title), 'text': '\n\n'.join(pars), 'words': words})

if not sections:
    sys.exit('no chapters found')
book = {'id': bid, 'title': meta['title'], 'author': meta['author'], 'level': level, 'kind': 'original', 'wiki': meta['wiki'], 'ru': meta['ru'],
        'chapters': [{'title': s['title'], 'text': s['text']} for s in sections]}
out = root / f'{bid}.js'
out.write_text('window.BOOK_LOADED && window.BOOK_LOADED(' + json.dumps(book, ensure_ascii=False) + ');\n', encoding='utf-8')

# запись в оглавление
idx_path = root / 'index.js'
idx = idx_path.read_text(encoding='utf-8')
arr = json.loads(idx[idx.index('['): idx.rindex(']') + 1])
arr = [b for b in arr if b['id'] != bid]
arr.append({'id': bid, 'title': meta['title'], 'author': meta['author'], 'level': level, 'kind': 'original', 'wiki': meta['wiki'], 'ru': meta['ru'],
            'chapters': len(sections), 'words': sum(s['words'] for s in sections)})
head = idx[: idx.index('[')]
idx_path.write_text(head + json.dumps(arr, ensure_ascii=False, indent=0) + ';\n', encoding='utf-8')
print(bid, len(sections), 'chapters', sum(s['words'] for s in sections), 'words | first:', sections[0]['title'], '| last:', sections[-1]['title'])
