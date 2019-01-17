/*
  Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const res = [];
  if (!root) return res;

  let queue = [root];
  while (queue.length) {
    let children = [];
    res.push(queue[queue.length - 1].val);
    for (let i = 0; i < queue.length; i++) {
      let current = queue[i];
      if (current.left) children.push(current.left);
      if (current.right) children.push(current.right);
    }
    queue = children;
  }

  return res;
};
