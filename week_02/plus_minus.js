// Complete the plusMinus function below.
function plusMinus(arr) {
    let positiveNumbersRatio = 0, negativeNumbersRatio = 0, zeroNumbersRatio = 0;

    // loop over array, count positive, negative and zero numbers
    arr.forEach(num => num > 0 ? positiveNumbersRatio++ : num < 0 ? negativeNumbersRatio++ : zeroNumbersRatio++);

    // divide each count by array length to get ratios
    positiveNumbersRatio /= arr.length;
    negativeNumbersRatio /= arr.length;
    zeroNumbersRatio /= arr.length;

    // toFixed takes one argument indicating limit for number of decimal places
    // print ratios upto 6 decimal places 
    console.log(positiveNumbersRatio.toFixed(6) + "\n" + negativeNumbersRatio.toFixed(6) + "\n" + zeroNumbersRatio.toFixed(6));
}