/*
  Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

var reverseBetween = function(head, m, n) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let slow = dummy;
  for (let i = 0; i < m - 1; i++) {
    slow = slow.next;
  }

  let mid = slow.next,
    fast = mid.next;

  for (let j = 0; j < n - m; j++) {
    mid.next = fast.next;
    fast.next = slow.next;
    slow.next = fast;
    fast = mid.next;
  }

  return dummy.next;
};
