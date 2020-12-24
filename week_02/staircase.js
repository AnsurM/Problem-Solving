// Complete the staircase function below.
function staircase(n) {
    // to draw stair case with decreasing spaces, we can use "length - (currentIndex + 1)" formula to place spaces, while i + 1 hashes
    for(let i = 0; i < n; i++) console.log(" ".repeat(n - (i + 1)) + "#".repeat(i + 1));
}