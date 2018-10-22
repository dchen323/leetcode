/*
  Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function(nums) {
  let results = [];
  if (!nums || !nums.length) return results;
  nums = nums.sort((a, b) => a - b);
  let combs = [];

  findPerms(results, combs, nums);

  return results;
};

function findPerms(results, combs, nums) {
  if (!nums.length) {
    results.push(combs.slice());
  }

  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    combs.push(nums[i]);
    let nextCandidates = nums.slice();
    nextCandidates.splice(i, 1);
    findPerms(results, combs, nextCandidates);
    combs.pop();
  }
}
