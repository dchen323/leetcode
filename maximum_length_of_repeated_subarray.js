/*
  Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:
Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation:
The repeated subarray with maximum length is [3, 2, 1].
Note:
1 <= len(A), len(B) <= 1000
0 <= A[i], B[i] < 100
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
  let dp = new Array(A.length + 1).fill(0);
  let ans = 0;

  for (let i = 1; i <= B.length; i++) {
    let temp = new Array(B.length + 1).fill(0);
    for (let j = 1; j <= A.length; j++) {
      if (A[j - 1] === B[i - 1]) {
        let value = dp[j - 1] + 1;
        temp[j] = value;
        ans = Math.max(ans, value);
      }
    }

    dp = temp;
  }
  return ans;
};
