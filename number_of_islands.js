/*
  Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandCount = 0;
  if (!grid || !grid.length) return islandCount;
  const rows = grid.length;
  const columns = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] > 0) {
        islandCount += checkIsland(grid, i, j);
      }
    }
  }

  return islandCount;
};

function checkIsland(grid, row, column) {
  if (
    row < 0 ||
    row >= grid.length ||
    column < 0 ||
    column >= grid[0].length ||
    grid[row][column] <= 0
  )
    return 0;

  grid[row][column] = -1;
  checkIsland(grid, row - 1, column);
  checkIsland(grid, row + 1, column);
  checkIsland(grid, row, column - 1);
  checkIsland(grid, row, column + 1);

  return 1;
}
