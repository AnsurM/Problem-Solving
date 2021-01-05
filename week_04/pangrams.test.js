const pangrams = require("./pangrams");

const inputs = [
  "We promptly judged antique ivory buckles for the next prize",
  "We promptly judged antique ivory buckles for the prize",
];
const outputs = ["pangram", "not pangram"];

inputs.forEach((input, index) => {
  const output = outputs[index];
  test(`test inputs for ${output}`, () => {
    expect(pangrams(input)).toBe(output);
  });
});
