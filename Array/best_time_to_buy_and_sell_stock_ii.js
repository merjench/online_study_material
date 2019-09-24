// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example:

Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.


//--------------------Solution 1------------------------//
var maxProfit = function(prices) {
    let min=null;
    let max=null;
    let isUp = false;
    let profit = 0;

    for (let i = 0; i < prices.length; ++i) {
        let item = prices[i]
        if (min===null || max===null){
            min = item;
            max = item;
            continue;
        }

        if (isUp){
            // buy and sell
            if (item<max){
                profit += max - min;
                isUp = false;
                max = item;
                min = item;
            } else {
                max = item;
            }
        } else { // looking for the minimum
            if (item>max){
                max = item;
                isUp = true
            } else {
                min = item;
                max = item;
            }
        }
    }
    if (isUp && max>min){
        profit+=max-min;
    }
    return profit;


};
