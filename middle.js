// TEST ASSERTION FUNCTIONS
const eqArrays = (firstArray, secondArray) => {
  let result;
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i ++) {
      for (let j = 0; j < secondArray.length; j++) {
        if (firstArray[i] === secondArray[j]) {
          result = true;
        } else {
          result = false;
        }
      }
    }
    return result;
  }
};


const assertArraysEqual = (actual, expected) => {
  let result;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i ++) {
      for (let j = 0; j < expected.length; j++) {
        if (actual[i] === expected[j]) {
          result = `❤️❤️❤️ Assertion Passed: [actual] === ${expected}`;
        } else {
          result = `✅✅✅ Assertion Failed: [actual] !== ${expected}`;
        }
      }
    }
    console.log(result);
  }
};

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

// TEST CODES
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// TEST WITH ASSERTARRAYEQUALS
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => true
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => true

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => true

// TEST WITH EQARRAYS
console.log(eqArrays(middle([1, 2, 3]), [2])); // => true
console.log(eqArrays(middle([1, 2, 3, 4, 5]), [3])); // => true

console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3])); // => true
