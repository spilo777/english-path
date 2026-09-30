// Файлы данных в public/data
export const paths = {
    course: 'course.json',
    unit: (id: string) => `units/${id}.json`,
    lessons: 'lessons.json',
    placement: 'placement.json',
    syllabus: 'syllabus.json',
    words: 'words.json',
    /** картинки для карточек, подобранные при сборке (build/word-images.mjs) */
    wordImg: 'word-img.json',
    dict: 'dict.json',
    forms: 'forms.json',
    library: 'library.json',
    topics: 'topics.json',
    tenses: 'tenses.json',
    bookIndex: 'books/index.json',
    book: (id: string) => `books/${id}.json`,
};
