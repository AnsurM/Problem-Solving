const hourglassSum = require("./hourglass_2d_array");

const inputs = [
  `-9 -9 -9 1 1 1
0 -9 0 4 3 2
-9 -9 -9 1 2 3
0 0 8 6 6 0
0 0 0 -2 0 0
0 0 1 2 4 0`,
  `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`,
];
const outputs = [28, 19];

inputs.forEach((input, index) => {
  const output = outputs[index];
  const input2dArray = input.split(/\n/).map((ind) => ind.split(" "));

  test(`test input for highest hourglass sum`, () => {
    expect(hourglassSum(input2dArray)).toBe(output);
  });
});
