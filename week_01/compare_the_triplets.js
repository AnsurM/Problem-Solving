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

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    // get length of scores,
    const scoresLength = a.length;
    // for each score,
    let aliceScore = 0, bobScore = 0;
    for(let i = 0; i < scoresLength; i++) {
        // subtract bob score from alice, if positive alice wins, if negative, bob wins
        const winner = a[i] - b[i];
        if(winner > 0) aliceScore++;
        else if(winner < 0) bobScore++;        
    }
    // return [aliceScore, bobScore]    
    return [aliceScore, bobScore];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
