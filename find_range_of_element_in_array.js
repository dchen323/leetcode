/*
  Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let result = [-1, -1];
  if (!nums || !nums.length) return result;
  let left = 0;
  let right = nums.length - 1;
  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target || nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid;
    }
  }

  if (nums[right] === target) {
    result[0] = right;
  }

  if (nums[left] === target) {
    result[0] = left;
  }
  left = 0;
  right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target || nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }

  if (nums[left] === target) {
    result[1] = left;
  }

  if (nums[right] === target) {
    result[1] = right;
  }

  return result;
};
