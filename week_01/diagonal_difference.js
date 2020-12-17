'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here        
    // get the diagonal length of arr, lets say m
    const m = arr.length - 1;
    let primarySum = 0, secondarySum = 0;
    // run a for loop,
    for(let i = 0; i <= m; i++) {
    // on each iteration, get primary Value by reading the arr[i][i], add it to                  primarySum
        primarySum += arr[i][i];
    // on each iteration, get secondary Value by reading the arr[i][m-i], add it to             secondarySum
        secondarySum += arr[i][m-i];
    }
    // finally, return primarySum - secondarySum
    return Math.abs(primarySum - secondarySum);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
