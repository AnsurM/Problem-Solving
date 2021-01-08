function appendAndDelete(s, t, k) {
  // POSSIBLE CASES
  // 1. Both strings are same
  // 2. Both are different

  // Approaches
  // Case 1: the operations should at least be equal to the (length * 2) of the provided input
  // OR 0 operations since no change is needed
  // Case 2:
  /*
        -> find the first character from start where differing characters occur (diffCharIndex)
        -> find the characters needed to be deleted from input (sourceStringLength - diffCharIndex) delCost
        -> find the characters to be inserted (targetStringlength - diffCharindex) insertCost
        -> the operations should at least be equal to (delCost + insertCost + 2n)
        -> or the operations should at least be equal to delete full string, insert full string, n empty deletions

        -> if operations are more than min cost, we can always keep deleting on empty string
  */

  // return "YES" or "NO" based on the expression operation >= minCost

  // Case 1
  if (s === t) {
    // even operations means delete and append n times can be done means its possible
    if (k % 2 === 0) return "Yes";
    // else if operations to at least delete entire and insert entire are provided, its possible
    else if (k >= s.length * 2) return "Yes";
    // any other number of operations not possible
    return "No";
  }

  const getDifferentCharacterIndex = (sourceString, targetString) => {
    // Case 2 (unequal strings)
    for (let index = 0; index < sourceString.length; index++) {
      if (sourceString[index] !== targetString[index]) return index;
    }
  };

  let longerString = t.length > s.length ? t : s;
  let shorterString = t.length > s.length ? s : t;

  const diffCharIndex = getDifferentCharacterIndex(longerString, shorterString);
  const cost1 = longerString.length - diffCharIndex;
  const cost2 = shorterString.length - diffCharIndex;
  const totalMinCost = cost1 + cost2;

  // if operations equal to min cost, its possible
  if (k === totalMinCost) return "Yes";
  // operation are more than erase all, insert all, its possible
  else if (k >= s.length + t.length) return "Yes";
  // if we can delete needed, insert needed, then we can also delete and insert common alphabets
  else if (k > totalMinCost && (k - totalMinCost) % 2 === 0) return "Yes";
  else return "No";
}

// for testing purpose
module.exports = appendAndDelete;

console.log(appendAndDelete("hackerhappy", "hackerrank", 9));
