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

const words = ["ground", "control", "to", "major", "tom"];
const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
//console.log(results1);
const results2 = map(lighthouses, lighthouse => lighthouse.length);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]), true; // => should PASS
assertArraysEqual(results2, [ 15, 13, 11, 16, 10, 11, 10 ]), true; // => should PASS
