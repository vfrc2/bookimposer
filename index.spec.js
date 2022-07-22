import { getNotebook, getImposePageOrder } from './lib/bookImposter.js';

describe('getNotebookTest', () => {
    it('should calc notebook with 2 sheets by 2 page per side by 2 sides', () => {
        expect(getNotebook(1, 8, 2, 2, 2)).toEqual([8, 1, 2, 7, 6, 3, 4, 5]);
        expect(getNotebook(9, 16, 2, 2, 2)).toEqual([16, 9, 10, 15, 14, 11, 12, 13]);
    });

    it('should calc notebook with 2 sheets by 2 page per side by 2 sides not from zero', () => {
        expect(getNotebook(9, 15, 2, 2, 2)).toEqual([-1, 9, 10, 15, 14, 11, 12, 13]);
    });
});

describe('getPages', () => {
    it('should calc book with 16 pages', () => {
        expect(getImposePageOrder(16, 2, 2, 2)).toEqual(
            [8, 1, 2, 7, 6, 3, 4, 5, 16, 9, 10, 15, 14, 11, 12, 13]
        );
    });
    it('should calc book with 13 pages', () => {
        expect(getImposePageOrder(13, 2, 2, 2)).toEqual(
            [8, 1, 2, 7, 6, 3, 4, 5, -1, 9, 10, -1, -1, 11, 12, 13]
        );
    });
});