/*
  Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/

/**
 * Definition for a binary tree node.

 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const res = [];
  if (!root) return res;

  const sumArray = [];

  findPath(root, sum, sumArray, res);

  return res;
};

function findPath(node, sum, sumArray, res) {
  sumArray.push(node.val);
  let currentSum = sum - node.val;
  if (currentSum === 0 && !node.left && !node.right) {
    res.push(sumArray.slice());
    return;
  }

  if (node.left) {
    findPath(node.left, currentSum, sumArray, res);
    sumArray.pop();
  }
  if (node.right) {
    findPath(node.right, currentSum, sumArray, res);
    sumArray.pop();
  }
}
