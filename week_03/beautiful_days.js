// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    // to reverse the number, reverse it same as array is reversed, then multiply by sign to preserve sign
    const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

    const isNumberEvenlyDisible = (number, divisor) => Number.isInteger(number / divisor);

    let beautifulDays = 0;
    for (let index = i; index <= j; index++) {
        // take number, reverse number, find difference of both numbers, divide it by k,
        // if diff is evenly disible, increment beautiful days
        if (isNumberEvenlyDisible((reversedNum(index) - index), k)) beautifulDays++;
    }
    return beautifulDays;
}
