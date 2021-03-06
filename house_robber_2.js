/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || !nums.length) return 0;
  const n = nums.length;
  if (n === 1) return nums[0];
  const dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  const dp2 = new Array(n);
  dp2[0] = 0;
  dp2[1] = nums[1];
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 2] + nums[i], dp2[i - 1]);
  }

  return Math.max(dp[n - 2], dp2[n - 1]);
};
