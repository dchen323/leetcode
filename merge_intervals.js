/*
  Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/

/**
 * Definition for an interval.
 *
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

var merge = function(intervals) {
  let results = [];
  if (!intervals || !intervals.length) return results;

  intervals = intervals.sort((a, b) => a.start - b.start);
  let potential = [intervals[0].start, intervals[0].end];

  let length = intervals.length;
  for (let i = 1; i < length; i++) {
    let min = Math.min(intervals[i].start, potential[0]);
    let max = Math.max(intervals[i].end, potential[1]);
    if (
      intervals[i].start <= potential[1] &&
      intervals[i].end >= potential[0]
    ) {
      potential[0] = min;
      potential[1] = max;
    } else {
      results.push(potential.slice());
      potential = [intervals[i].start, intervals[i].end];
    }
  }

  results.push(potential.slice());

  return results;
};
