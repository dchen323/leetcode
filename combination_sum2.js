/*
  Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const results = [];
  if (!candidates || !candidates.length) return results;
  candidates = candidates.sort((a, b) => a - b);
  const comb = [];
  findCombs(results, comb, candidates, target);
  return results;
};

function findCombs(results, comb, candidates, target) {
  if (target === 0) {
    results.push(comb.slice());
    return;
  }

  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] > target) {
      break;
    }

    if (candidates[i] === candidates[i - 1]) {
      continue;
    }

    comb.push(candidates[i]);
    let nextCandidates = candidates.slice(i + 1);
    findCombs(results, comb, nextCandidates, target - candidates[i]);
    comb.pop();
  }
}
