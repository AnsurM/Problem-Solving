// Complete the alternate function below.
function alternate(s) {
  // GOAL: find the longest sequence of alternate characters with only 2 characters

  // *** UTILITY FUNCTIONS ***

  // checks if character repeats in string like aa, bb etc
  const isCharacterConsecutive = (inputString, character) =>
    inputString.includes(character + character);

  // checks if pair found in string like ab in abcjba
  const isPairInString = (inputString, pair) => inputString.includes(pair);

  const removeAllDuplicates = (inputString) => {
    // this loop will keep repeating until all duplicates have been removed
    for (let index = 0; index < inputString.length; index++) {
      const char = inputString[index];
      if (isCharacterConsecutive(inputString, char)) {
        // remove all dups with regexp
        let repSequenceRegExp = new RegExp(char, "g");
        inputString = inputString.replace(repSequenceRegExp, "");
        // reset index to restart loop with new string length after removing dups
        index = 0;
      }
    }
    return inputString;
  }; //

  // *** UTILITY FUNCTIONS END ***

  // ALGO
  // find any characters occuring twice, remove them to make string non repeating,
  let inputNonDuplicate = removeAllDuplicates(s);
  let acceptedPairs = [];
  // loop over string, check pairs as following,
  for (let index = 0; index < inputNonDuplicate.length - 1; index++) {
    const letter1 = inputNonDuplicate[index];
    const letter2 = inputNonDuplicate[index + 1];
    const pair = letter1 + letter2;
    const revPair = letter2 + letter1;
    // consider pair ab, check if string contains ba and acc pair does not contain this pair or its reverse,
    if (
      isPairInString(inputNonDuplicate, revPair) &&
      !acceptedPairs.includes(pair) &&
      !acceptedPairs.includes(revPair)
    ) {
      //  add ab to accepted pair
      acceptedPairs.push(pair);
    }
  }

  // copy of inputnondup to remove non pair letters
  let inputNonDuplicateTemp = inputNonDuplicate;
  const acceptedPairsString = acceptedPairs.join("");
  for (let index = 0; index < inputNonDuplicate.length; index++) {
    // remove all characters not found in pair,
    if (!acceptedPairsString.includes(inputNonDuplicate[index])) {
      // remove all characters using regexp
      let repSequenceRegExp = new RegExp(inputNonDuplicate[index], "g");
      inputNonDuplicateTemp = inputNonDuplicateTemp.replace(
        repSequenceRegExp,
        ""
      );
    }
  }
  //   console.log(acceptedPairs, inputNonDuplicateTemp);
  // this length will only be non zero if valid alternate pairs exist, else automatically 0
  return inputNonDuplicateTemp.length;
}

// console.log(alternate("asdcbsdcagfsdbgdfanfghbsfdab"));

// FAILS 1 TEST CASE FOR "asdcbsdcagfsdbgdfanfghbsfdab"

module.exports = alternate;
