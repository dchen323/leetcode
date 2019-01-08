/*
  Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.



Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
*/

/**
 * Definition for a binary tree node.
 *
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0;
  if (!root) return sum;
  let small, large;

  if (L < R) {
    small = L;
    large = R;
  } else {
    small = R;
    large = L;
  }

  const queue = [root];

  while (queue.length) {
    let current = queue.shift();

    if (current.val >= small && current.val <= large) sum += current.val;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return sum;
};
