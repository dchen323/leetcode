/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:

Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

var twoSum = function(nums, target) {
  if (!nums || !nums.length) return null;
  const indexTracker = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (indexTracker.has(target - nums[i])) {
      return [indexTracker.get(target - nums[i]), i];
    }
    indexTracker.set(nums[i], i);
  }

  return null;
};

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
