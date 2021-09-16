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

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(i);
      } else {
        result[sentence[i]] = [i];
      }
    }
  }
  return result;
};
console.log(letterPositions("lighthouse in the house"));
console.log(eqArrays((letterPositions("hello")).h, [1]));
console.log(eqArrays((letterPositions("hello")).e, [1]));
console.log(eqArrays((letterPositions("hello")).l, [1]));
console.log(eqArrays((letterPositions("hello")).o, [1]));