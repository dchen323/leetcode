/*

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.
Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length === k) return "0";

  const stack = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack.length > 1 && stack[0] == 0) {
    stack.splice(0, 1);
  }

  return stack.join("");
};
