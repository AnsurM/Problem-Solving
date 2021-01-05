const alternates = require("./alternates");

const inputs = [
  "beabeefeab",
  "asdcbsdcagfsdbgdfanfghbsfdab",
  "asvkugfiugsalddlasguifgukvsa",
];
const outputs = [5, 8, 0];

inputs.forEach((input, index) => {
  const output = outputs[index];
  test(`test input for alternate string length`, () => {
    expect(alternates(input)).toBe(output);
  });
});
