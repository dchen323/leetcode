/*
  Given the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
  if (!root) return [];
  let res = [];

  const treeSum = findSum(root, res);
  res.push(treeSum);

  const resFreq = new Map();
  for (let i = 0; i < res.length; i++) {
    if (!resFreq.has(res[i])) {
      resFreq.set(res[i], 0);
    }

    resFreq.set(res[i], resFreq.get(res[i]) + 1);
  }
  let max = 0;
  res = [];

  for (let value of resFreq.values()) {
    max = Math.max(max, value);
  }

  for ([key, value] of resFreq) {
    if (max === value) {
      res.push(key);
    }
  }

  return res;
};

function findSum(node, res) {
  if (!node) return 0;
  if (node.val === 0) res.push(node.val);
  const leftSum = findSum(node.left, res);
  const rightSum = findSum(node.right, res);

  if (leftSum) res.push(leftSum);
  if (rightSum) res.push(rightSum);

  return node.val + leftSum + rightSum;
}
