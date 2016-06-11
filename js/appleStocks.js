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

  var minPrice = stockPricesYesterday[0];
  var maxProfit = 0;

  for (var i = 0; i < stockPricesYesterday.length; i++) {
      var currentPrice = stockPricesYesterday[i];

      // ensure min_price is the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);

      // see what our profit would be if we bought at the
      // min price and sold at the current price
      var potentialProfit = currentPrice - minPrice;

      // update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}

// Problem - What if the stock value stays the same? What if the stock value goes down all day?
