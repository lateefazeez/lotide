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

const flatten = (mainArray) => {
  let finalArray = [];
  for (let i = 0; i < mainArray.length; i++) {
    if (Array.isArray(mainArray[i])) {
      for (let j = 0; j < mainArray[i].length; j++) {
        finalArray.push(mainArray[i][j]);
      }
    } else {
      finalArray.push(mainArray[i]);
    }
    
  }
  console.log(finalArray);
};
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
