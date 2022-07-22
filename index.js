import { getNotebook, getImposePageOrder } from './lib/bookImposter.js';

const pages = 40;
const notebookPages = 2; // 8

/**
 *   ___ ___ 1 ___ ___     ___ ___ 2 ___ ___
 *  | 8 | 1 | | 2 | 7 |   | 6 | 3 | | 4 | 5 |
 *  |___|___| |___|___|   |___|___| |___|___|  X 2
 *    1   2     3   4       5   6     7   8
 *        0                    +2        +2
 *   ___ ___ 1 ___ ___  
 *  | 4 | 1 | | 2 | 3 | 
 *  |___|___| |___|___| x 1
 *    1   2     3   4   
 *    n  i-1   i-1 i-1
 */


// console.log(...getNotebook(0+1, 8, 2));
// console.log(...getNotebook(8+1, 8*2, 2));
// console.log(...getNotebook(16+1, 8*3, 2));
console.log(...getNotebook(16+1, 22, 2));

console.log(...getImposePageOrder(24, 2, 2));

