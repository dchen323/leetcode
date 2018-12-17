/*
  Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || !nums.length) return 0;
  const dp = new Array(nums.length).fill(0);
  dp[0] = 1;
  let longest = 1;
  for (let i = 1; i < nums.length; i++) {
    let maxVal = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxVal = Math.max(maxVal, dp[j]);
      }
    }

    dp[i] = maxVal + 1;
    longest = Math.max(longest, dp[i]);
  }

  return longest;
};
