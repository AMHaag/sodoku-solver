const testGrid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 0, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 0, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 0],
];
const veryEasy = [
  [0, 0, 7, 0, 0, 0, 0, 2, 0],
  [4, 1, 9, 6, 0, 0, 0, 0, 8],
  [2, 3, 8, 0, 0, 0, 6, 9, 5],
  [3, 0, 4, 2, 0, 9, 8, 1, 0],
  [1, 0, 2, 8, 7, 0, 0, 4, 9],
  [8, 0, 5, 1, 6, 4, 2, 7, 3],
  [0, 0, 3, 5, 0, 1, 4, 0, 7],
  [0, 0, 0, 0, 0, 6, 3, 5, 0],
  [5, 0, 6, 7, 3, 2, 9, 0, 1],
];
const easy = [
  [2, 4, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 1, 6, 0, 0, 4, 2, 0],
  [8, 0, 0, 0, 4, 0, 0, 0, 1],
  [0, 6, 0, 9, 7, 0, 0, 0, 0],
  [9, 7, 0, 1, 8, 0, 0, 0, 5],
  [1, 0, 4, 3, 5, 6, 0, 9, 2],
  [0, 0, 0, 8, 2, 3, 0, 0, 6],
  [0, 0, 3, 0, 9, 5, 8, 1, 7],
  [0, 5, 0, 7, 0, 0, 2, 0, 0],
];
const medium = [
  [0, 5, 0, 0, 0, 7, 0, 0, 8],
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 3, 8, 0, 5, 6, 1, 0, 0],
  [1, 0, 0, 0, 0, 9, 7, 0, 0],
  [9, 0, 0, 0, 6, 0, 4, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 6, 2],
  [2, 4, 0, 0, 0, 0, 0, 0, 9],
  [0, 6, 7, 0, 9, 0, 3, 2, 0],
  [0, 1, 0, 5, 8, 0, 0, 0, 4],
];
const hard = [
  [0, 6, 0, 8, 0, 1, 5, 0, 0],
  [0, 0, 3, 0, 0, 0, 0, 0, 0],
  [0, 8, 9, 2, 0, 0, 0, 0, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 6, 5, 0],
  [0, 0, 5, 7, 0, 0, 0, 3, 0],
  [0, 5, 1, 0, 0, 0, 3, 9, 0],
  [3, 0, 0, 0, 2, 0, 8, 0, 0],
  [0, 9, 0, 5, 0, 0, 0, 2, 0],
];

export {testGrid,veryEasy,easy,medium,hard}