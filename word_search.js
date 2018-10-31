/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (!word.length) return true;
  if (!board || !board.length) return false;

  const rows = board.length;
  const columns = board[0].length;
  const boardTracker = [];

  for (let i = 0; i < rows; i++) {
    boardTracker.push(new Array(columns).fill(false));
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let win = findWord(board, word, boardTracker, i, j);
      if (win) return true;
    }
  }

  return false;
};

function findWord(board, word, tracker, row, column) {
  if (
    row < 0 ||
    row >= board.length ||
    column < 0 ||
    column >= board[0].length ||
    tracker[row][column]
  )
    return false;

  if (!word.length) return true;

  if (board[row][column] === word[0]) {
    let nextWord = word.slice(1);
    tracker[row][column] = true;
    let left = findWord(board, nextWord, tracker, row, column - 1);
    let right = findWord(board, nextWord, tracker, row, column + 1);
    let up = findWord(board, nextWord, tracker, row - 1, column);
    let down = findWord(board, nextWord, tracker, row + 1, column);
    if (!nextWord.length || left || right || up || down) {
      return true;
    }
  }

  tracker[row][column] = false;
  return false;
}
