// Complete the staircase function below.
function staircase(n) {
    // to draw stair case with decreasing spaces, we can use "length - (currentIndex)" formula to place spaces, while i hashes (start i at 1)
    for(let i = 1; i <= n; i++) console.log(" ".repeat(n - i) + "#".repeat(i));
}
staircase(6)