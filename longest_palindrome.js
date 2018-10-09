/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s || !s.length) return s;
  if (s.length === 1) return s;
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let index1 = findLength(i, i, s);
    let index2 = findLength(i, i + 1, s);
    let len = Math.max(index1, index2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.slice(start, end + 1);
};

function findLength(start, end, str) {
  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start--;
    end++;
  }

  return end - start - 1;
}
