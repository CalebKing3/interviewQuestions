//Apple Stocks

/*
Suppose we could access yesterday's stock prices as an array, where:
The indices are the time in minutes past trade opening time, which was 9:30am local time.
The values are the price in dollars of Apple stock at that time.
So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.

Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
*/

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

function getMaxProfit(stockPricesYesterday) {

  var maxProfit = 0;

  // go through every price and time
  for (var earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
      var earlierPrice = stockPricesYesterday[earlierTime];

      // and go through all the LATER prices
      for (var laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
          var laterPrice = stockPricesYesterday[laterTime];

          // see what our profit would be if we bought at the
          // min price and sold at the current price
          var potentialProfit = laterPrice - earlierPrice;

          // update maxProfit if we can do better
          maxProfit = Math.max(maxProfit, potentialProfit);
      }
  }

  return maxProfit;
}
