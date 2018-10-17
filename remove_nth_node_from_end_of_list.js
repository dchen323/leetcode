/*
Given a linked list, remove the n - th node from the end of list and return its head.

  Example:

Given linked list: 1 -> 2 -> 3 -> 4 -> 5, and n = 2.

After removing the second node from the end, the linked list becomes 1 -> 2 -> 3 -> 5.
Note:

Given n will always be valid.
*/

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let nodeList1 = dummy;
  let nodeList2 = dummy;

  for (let i = 0; i <= n; i++) {
    nodeList2 = nodeList2.next;
  }

  while (nodeList2) {
    nodeList1 = nodeList1.next;
    nodeList2 = nodeList2.next;
  }
  nodeList1.next = nodeList1.next.next;

  return dummy.next;
};

var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let nodeList1 = dummy;
  let nodeList2 = dummy;

  for (let i = 0; i <= n; i++) {
    nodeList2 = nodeList2.next;
  }

  while (nodeList2) {
    nodeList1 = nodeList1.next;
    nodeList2 = nodeList2.next;
  }
  nodeList1.next = nodeList1.next.next;

  return dummy.next;
};
