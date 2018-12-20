/*
  Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example:

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let minLength = Infinity;
  if (!nums || !nums.length) return 0;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= s) return 1;
    sum += nums[i];
    while (sum >= s) {
      minLength = Math.min(minLength, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
