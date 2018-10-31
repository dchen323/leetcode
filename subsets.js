/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const results = [[]];
  if (!nums || !nums.length) return results;

  const subs = [];
  findSubs(results, subs, nums);
  return results;
};

function findSubs(results, subs, candidates) {
  for (let i = 0; i < candidates.length; i++) {
    subs.push(candidates[i]);
    results.push(subs.slice());
    let nextCandidates = candidates.slice(i + 1);
    findSubs(results, subs, nextCandidates);
    subs.pop();
  }
}
