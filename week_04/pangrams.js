// Complete the pangrams function below.
function pangrams(s) {
  // if empty input or input less than total alphabets in english, not pangram
  if (!s || s.length < 26) return "not pangram";

  const allLetters = "abcdefghijklmnopqrstuvwxyz";
  const inputLowerCased = s.toLowerCase();

  // for a-z string, check if string is contained, continue,
  // if not contained, return not pangram
  for (let index = 0; index < allLetters.length; index++) {
    const char = allLetters[index];
    if (inputLowerCased.indexOf(char) === -1) return "not pangram";
  }
  return "pangram";
}

module.exports = pangrams;
