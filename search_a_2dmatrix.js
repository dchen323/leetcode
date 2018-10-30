/*
  Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (!matrix || !matrix.length) return false;

  let rowTracker, middle;

  let left = 0;
  let right = matrix.length;

  while (left + 1 < right) {
    middle = Math.floor((left + right) / 2);
    if (matrix[middle][0] === target) {
      return true;
    } else if (target < matrix[middle][0]) {
      right = middle;
    } else {
      left = middle;
    }
  }

  rowTracker = left;

  left = 0;
  right = matrix[0].length;

  while (left < right) {
    middle = Math.floor((left + right) / 2);
    if (matrix[rowTracker][middle] === target) {
      return true;
    } else if (target < matrix[rowTracker][middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return false;
};
