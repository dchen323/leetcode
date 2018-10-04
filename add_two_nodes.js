/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let remainder = 0;
  let newNode = new ListNode(null);
  let dummy = newNode;
  while (l1 || l2) {
    let sum;
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    sum = l1Val + l2Val + remainder;
    remainder = Math.floor(sum / 10);

    const currentNode = new ListNode(sum % 10);
    newNode.next = currentNode;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    newNode = newNode.next;
  }

  if (remainder) {
    const currentNode = new ListNode(1);
    newNode.next = currentNode;
  }

  return dummy.next;
};
