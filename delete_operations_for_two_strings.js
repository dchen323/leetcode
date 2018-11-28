/*

Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function(str1, str2) {
  const dp = [];
  for (let i = 0; i <= str1.length; i++) {
    const inner = [];
    for (let j = 0; j <= str2.length; j++) {
      inner.push(j);
    }

    inner[0] = i;
    dp.push(inner);
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[str1.length][str2.length];
};
