/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    heapify(nums, i, nums.length);
  }

  let index = nums.length - 1;
  while (nums.length - index < k) {
    let temp = nums[0];
    nums[0] = nums[index];
    nums[index] = temp;

    heapify(nums, 0, index);
    index--;
  }
  /*
    ##heap-sort
  while (index > 0) {
    let temp = nums[0];
    nums[0] = nums[index];
    nums[index] = temp;

    heapify(nums, 0, index);
    index--;
  }
  */

  return nums[0];
};

function heapify(arr, i, max) {
  let index = i;

  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < max && arr[left] > arr[index]) {
    index = left;
  }

  if (right < max && arr[right] > arr[index]) {
    index = right;
  }

  if (index === i) return;

  let temp = arr[index];
  arr[index] = arr[i];
  arr[i] = temp;

  heapify(arr, index, max);
}
