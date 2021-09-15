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

const without = (source, itemsToRemove) => {
  for (let i = 0; i < itemsToRemove.length; i++)
    if (source.includes(itemsToRemove[i])) {
      source.splice(source.indexOf(itemsToRemove[i]), 1);
    }
  console.log(source);
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);