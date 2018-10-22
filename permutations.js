/*
  Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  let results = [];
  if (!nums || !nums.length) return results;
  let combs = [];

  findPerms(results, combs, nums);

  return results;
};

function findPerms(results, combs, nums) {
  if (!nums.length) {
    results.push(combs.slice());
    return;
  }

  let length = nums.length;
  for (let i = 0; i < length; i++) {
    combs.push(nums[i]);
    let nextCandidates = nums.slice();
    nextCandidates.splice(i, 1);
    findPerms(results, combs, nextCandidates);
    combs.pop();
  }
}
