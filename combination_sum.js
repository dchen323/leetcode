/*
  Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  if (!candidates || !candidates.length) return [];
  candidates = candidates.sort((a, b) => a - b);
  let results = [];
  let combs = [];
  findCombs(results, combs, candidates, target);

  return results;
};

function findCombs(results, combs, candidates, target) {
  if (target === 0) {
    results.push(combs.slice());
    return;
  }

  for (let i = 0; i < candidates.length; i++) {
    if (target < candidates[i]) {
      break;
    }

    combs.push(candidates[i]);
    let nextCandidates = candidates.slice(i);
    findCombs(results, combs, nextCandidates, target - candidates[i]);
    combs.pop();
  }
}
