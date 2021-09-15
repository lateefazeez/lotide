const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${actual}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
  }
};
assertEqual("Lighthouse Labs" , "Bootcamp");
assertEqual(1, 1);

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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS