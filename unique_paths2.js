/*
  A robot is located at the top-left corner of a m x n grid.

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.

Now consider if some obstacles are added to the grids. How many unique paths would there be?



An obstacle and empty space is marked as 1 and 0 respectively in the grid.

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid || !obstacleGrid.length) return 0;

  const rows = obstacleGrid.length;
  const columns = obstacleGrid[0].length;

  const grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push(new Array(columns).fill(0));
  }

  for (let i = 0; i < rows; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    } else {
      grid[i][0] = 1;
    }
  }

  for (let i = 0; i < columns; i++) {
    if (obstacleGrid[0][i] === 1) {
      break;
    } else {
      grid[0][i] = 1;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      grid[i][j] =
        obstacleGrid[i][j] === 0 ? grid[i][j - 1] + grid[i - 1][j] : 0;
    }
  }

  return grid[rows - 1][columns - 1];
};
