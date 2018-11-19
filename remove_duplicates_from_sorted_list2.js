/*

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

  Example 1:

Input: 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5
Output: 1 -> 2 -> 5
Example 2:

Input: 1 -> 1 -> 1 -> 2 -> 3
Output: 2 -> 3


Definition for singly-linked list.

 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let dummy = new ListNode(null);
  let start = dummy;

  while (head) {
    if (!head.next || head.val !== head.next.val) {
      dummy.next = head;
      dummy = head;
    } else {
      dummy.next = null;
      while (head.next && head.val === head.next.val) head = head.next;
    }

    head = head.next;
  }

  return start.next;
};
