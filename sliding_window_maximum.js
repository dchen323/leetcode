/*
  Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7]
Explanation:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note:
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const maxStack = [];
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    while (maxStack.length && nums[i] > maxStack[maxStack.length - 1]) {
      maxStack.pop();
    }

    maxStack.push(nums[i]);

    let startIdx = i - k + 1;

    if (startIdx < 0) continue;

    res.push(maxStack[0]);

    if (nums[startIdx] === maxStack[0]) maxStack.shift();
  }

  return res;
};
