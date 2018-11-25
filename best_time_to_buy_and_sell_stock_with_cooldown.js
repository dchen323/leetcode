/*

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices || !prices.length) return 0;
  let sell = 0,
    prevSell = 0,
    buy = -Infinity,
    prevBuy;
  for (let i = 0; i < prices.length; i++) {
    prevBuy = buy;
    buy = Math.max(prevSell - prices[i], buy); //sell[i - 2] - prices[i] or buy
    prevSell = sell;
    sell = Math.max(prevBuy + prices[i], sell); //buy[i - 1] or sell
  }

  return sell;
};
