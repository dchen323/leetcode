/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  if (!s || !s.length) return 0;
  let stringHash = {};
  let longestLength = 0;
  let currentLength = 0;
  for (let i = 0; i < s.length; i++) {
    if (stringHash[s[i]]) {
      currentLength = Math.max(currentLength, stringHash[s[i]]);
    }

    longestLength = Math.max(longestLength, i - currentLength + 1);
    stringHash[s[i]] = i + 1;
  }

  return longestLength;
};
