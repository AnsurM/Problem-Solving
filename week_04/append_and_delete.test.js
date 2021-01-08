const appendAndDelete = require("./append_and_delete");

const inputs = [
  { s: "abc", t: "def", k: 6 },
  { s: "hackerhappy", t: "hackerrank", k: 9 },
  { s: "aba", t: "aba", k: 7 },
  { s: "ashley", t: "ash", k: 2 },
  { s: "y", t: "yu", k: 2 },
  { s: "qwerasdf", t: "qwerbsdf", k: 6 },
];

const outputs = ["Yes", "Yes", "Yes", "No", "No", "No"];

inputs.forEach((input, index) => {
  const output = outputs[index];
  const { s, t, k } = input;
  test(`test inputs for ${output}`, () => {
    expect(appendAndDelete(s, t, k)).toBe(output);
  });
});
