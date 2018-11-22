/*

Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:

Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board || !board.length) return;

  for (let i = 0; i < board.length; i++) {
    findRegion(board, i, 0);
    findRegion(board, i, board[0].length - 1);
  }

  for (let i = 1; i < board[0].length - 1; i++) {
    findRegion(board, 0, i);
    findRegion(board, board.length - 1, i);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "#") {
        board[i][j] = "O";
      }
    }
  }
};

function findRegion(board, row, col) {
  if (
    row < 0 ||
    row === board.length ||
    col < 0 ||
    col === board[0].length ||
    board[row][col] !== "O"
  )
    return;

  board[row][col] = "#";

  findRegion(board, row + 1, col);
  findRegion(board, row - 1, col);
  findRegion(board, row, col + 1);
  findRegion(board, row, col - 1);
}
