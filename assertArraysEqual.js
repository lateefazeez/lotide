// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${expected}`);
//   } else {
//     console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
//   }
// };
// assertEqual("Lighthouse Labs" , "Bootcamp");
// assertEqual(1, 1);

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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false