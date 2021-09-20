// ACTUAL FUNCTION
const middle = (inputArray) => {
  let midArrays = [];
  if (inputArray.length === 1 || inputArray.length === 2) {
    return [];
  } else if (inputArray.length % 2 === 0) {
    midArrays.push(inputArray[(inputArray.length / 2) - 1], inputArray[(inputArray.length / 2)]);
  } else {
    midArrays.push(inputArray[Math.floor(inputArray.length / 2)]);
  }
  return midArrays;
};

module.exports = middle;
