// Complete the hourglassSum function below.
function hourglassSum(arr) {
  const hourGlassCenterIndexes = [
    { row: 1, column: 1 },
    { row: 1, column: 2 },
    { row: 1, column: 3 },
    { row: 1, column: 4 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
    { row: 2, column: 3 },
    { row: 2, column: 4 },
    { row: 3, column: 1 },
    { row: 3, column: 2 },
    { row: 3, column: 3 },
    { row: 3, column: 4 },
    { row: 4, column: 1 },
    { row: 4, column: 2 },
    { row: 4, column: 3 },
    { row: 4, column: 4 },
  ];
  const getIndexHourGlassSum = (hourGlassArray, hourGlassIndex) => {
    // get the hour glass center row,col pair from array
    const { row, column } = hourGlassCenterIndexes[hourGlassIndex];
    // calculate upper triangle sum for hourglass
    // center indexes are row, column`
    // upper indexes are, [column-1][row-1],[column-1][row],[column-1][row+1],
    // lower indexes are, [column+1][row-1],[column+1][row],[column+1][row+1],

    // calculate sums for upper half, lower half and center, sum these.
    const upperHalfSum =
      Number(hourGlassArray[column - 1][row - 1]) +
      Number(hourGlassArray[column - 1][row]) +
      Number(hourGlassArray[column - 1][row + 1]);
    const lowerHalfSum =
      Number(hourGlassArray[column + 1][row - 1]) +
      Number(hourGlassArray[column + 1][row]) +
      Number(hourGlassArray[column + 1][row + 1]);
    const centerIndexValue = Number(hourGlassArray[column][row]);
    return upperHalfSum + centerIndexValue + lowerHalfSum;
  };

  let hourGlassSums = [];
  // add each hourGlass sum to an array with index representing the hourGlass number,
  for (let index = 0; index < 16; index++) {
    hourGlassSums.push(getIndexHourGlassSum(arr, index));
  }
  // finally, print the max sum from the array
  console.log(Math.max(...hourGlassSums));

  // returning just for testing purposes
  return Math.max(...hourGlassSums);
}

module.exports = hourglassSum;
