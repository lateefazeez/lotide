const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${actual}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //console.log(Object.keys(object1));
  let keyFrom1 = Object.keys(object1), keyFrom2 = Object.keys(object2);
  if (keyFrom1.length !== keyFrom2.length) return false;
  for (let i = 0; i < keyFrom1.length; i++) {

    //console.log(object1[keyFrom1[i]]);
    let keyValue1 = object1[keyFrom1[i]], keyValue2 = object2[keyFrom1[i]];
    //console.log(keyFrom2[i]);
    if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
      if (eqArrays(keyValue1, keyValue2) === false) {
        return false;
      }

    } else if (typeof(keyValue1) === "object" && typeof(keyValue2) === "object" && keyValue1 !== null && keyValue2 !== null && !Array.isArray(keyValue1) && !Array.isArray(keyValue2)) {
      if (eqObjects(keyValue1, keyValue2) === false) {
        return false;
      }
    } else if (keyValue1 !== keyValue2) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  //console.log(Object.keys(object1));
  let result;
  let keyFrom1 = Object.keys(actual), keyFrom2 = Object.keys(expected);
  if (keyFrom1.length === keyFrom2.length) {
    for (let i = 0; i < keyFrom1.length; i++) {
      for (let j = 0; j < keyFrom2.length; j++) {
        //console.log(actual[keyFrom1[i]]);
        let keyValue1 = actual[keyFrom1[i]], keyValue2 = expected[keyFrom1[i]];
        //console.log(keyFrom2[i]);
        if (keyValue1 === keyValue2) {
          result = `❤️❤️❤️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
        } else {
          result = `✅✅✅ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
        }
      }
    }
    console.log(result);
  }
  
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false