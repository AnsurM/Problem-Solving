function birthdayCakeCandles(candles) {
    // Write your code here
    // find the tallest unit candle by using Math.max on candles array
    // return the count for this candle by filtering units equal to this
    // and returning its length
    const tallestUnitCandle = Math.max(...candles);
    return candles.filter(item => item === tallestUnitCandle).length;
}