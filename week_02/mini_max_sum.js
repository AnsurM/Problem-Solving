// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    // create an array for holding sums of each index in the index which was skipped
    let sumArray = [];

    // loop over each index of input array, use reduce with index to add sum to index,
    // subtract the current number to skip its result in value
    arr.forEach((number, index) => sumArray[index] = (arr.reduce((acc, currVal) => Number(acc) + Number(currVal)) - Number(number)));

    // use Math.min and Math.max to find min and max numbers in array (spreaded) and print them
    console.log(`${Math.min(...sumArray)} ${Math.max(...sumArray)}`)
}