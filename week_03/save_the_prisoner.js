// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    // get full rounds of candies distributed
    let fullRounds = 0;
    // add rounds until left candies can complete another round on full number of prisoners ( answer > 1 )
    while (((m - (n * fullRounds)) / n) > 1) {
        fullRounds++;
    }
    // add the starting number (s) to total candies (m) to check if it goes beyond total prisoners
    // warn index will be starting position + (candies - fullRounds) - 1, -1 bcoz last candy owner will be warned
    const warnPrisonerIndex =  s + (m - (n * fullRounds)) - 1;
    return warnPrisonerIndex;
}