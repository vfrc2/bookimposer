export function getImposePageOrder(pagesCount, notebookPagesCount = 2, pagesPerSheet = 2, sides = 2) {
    const notebookAllPagesCount = notebookPagesCount * pagesPerSheet * sides;
    let notebooksCount = Math.floor(pagesCount / notebookAllPagesCount);

    if ((pagesCount % notebookAllPagesCount) > 0) {
        notebooksCount += 1;
    } 

    let pagesList = [];

    for (let n = 0; n < notebooksCount; n++) {
        const start = n * notebookAllPagesCount + 1;
        pagesList = [...pagesList, ...getNotebook(start, pagesCount, notebookPagesCount, pagesPerSheet, sides)];
    }

    return pagesList;
}

export function getNotebook(pageStart, maxPage, notebookPageCount = 2, pagesPerSheet = 2, sides = 2) {
    const pagesList = [];

    const totalPagesCount = notebookPageCount * pagesPerSheet * sides;

    let right = pageStart;
    let left = pageStart + totalPagesCount - 1;

    for (let i = 0; i < totalPagesCount; i++) {
        const y = Math.floor(i / pagesPerSheet);
        const x = (i + 1) % pagesPerSheet;
        const isLeft = !!((y + 1) % pagesPerSheet);

        const j = y * pagesPerSheet + x;

        if ((isLeft && x === 0) || (!isLeft && x === 1)) {
            pagesList[j] = (left > maxPage) ? -1 : left;
            left -= 1;
        } else if ((isLeft && x === 1) || (!isLeft && x === 0)) {
            pagesList[j] = right;
            right += 1;
        }
    }
    return pagesList;
}