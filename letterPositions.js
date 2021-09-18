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
  if (firstArray.length !== secondArray.length) return false;
  
  for (let i = 0; i < firstArray.length; i++) {
    firstArray, secondArray; //Added sort method
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  
  return true;
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
console.log(eqArrays((letterPositions("hello")).h, [0]));
console.log(eqArrays((letterPositions("hello")).e, [1]));
console.log(eqArrays((letterPositions("hello")).l, [2, 3]));
console.log(eqArrays((letterPositions("hello")).o, [4]));