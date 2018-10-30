/*
  Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid || !grid.length) return 0;

  const rows = grid.length;
  const columns = grid[0].length;

  for (let i = 1; i < columns; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  for (let j = 1; j < rows; j++) {
    grid[j][0] += grid[j - 1][0];
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      let min = Math.min(grid[i][j - 1], grid[i - 1][j]);
      grid[i][j] += min;
    }
  }

  return grid[rows - 1][columns - 1];
};
