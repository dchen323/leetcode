/*
  Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Note:

Your algorithm should run in O(n) time and uses constant extra space.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(numbers) {
  if (!numbers.length) return 1;

  const length = numbers.length;
  for (let i = 0; i < length; i++) {
    while (
      numbers[i] > 0 &&
      numbers[i] <= length &&
      numbers[i] !== numbers[numbers[i] - 1]
    ) {
      let swapIndex = numbers[i] - 1;
      [numbers[i], numbers[swapIndex]] = [numbers[swapIndex], numbers[i]];
    }
  }

  for (let i = 0; i < length; i++) {
    if (numbers[i] !== i + 1) return i + 1;
  }

  return length + 1;
};
