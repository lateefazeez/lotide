const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
  }
};

const eqArrays = (firstArray, secondArray) => {
  if (firstArray.length === secondArray.length) {
    for (let i = 0; i < firstArray.length; i ++) {
      for (let j = 0; j < secondArray.length; j++) {
        if (firstArray[i] === secondArray[j]) {
          return true;
        }
      }
    }
  }
  return false;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //console.log(Object.keys(object1));
  let keyFrom1 = Object.keys(object1), keyFrom2 = Object.keys(object2);
  if (keyFrom1.length === keyFrom2.length) {
    for (let i = 0; i < keyFrom1.length; i++) {
      for (let j = 0; j < keyFrom2.length; j++) {
        //console.log(object1[keyFrom1[i]]);
        let keyValue1 = object1[keyFrom1[i]], keyValue2 = object2[keyFrom1[i]];
        //console.log(keyFrom2[i]);
        if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
          eqArrays(keyValue1, keyValue2);
        } else if (typeof(keyValue1) === "object" && typeof(keyValue2) === "object" && keyValue1 !== null && keyValue2 !== null && !Array.isArray(keyValue1) && !Array.isArray(keyValue2)) {
          return eqObjects(keyValue1, keyValue2);
        } else if (keyValue1 === keyValue2) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return false;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false