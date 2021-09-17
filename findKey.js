const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${actual}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
  }
};

const findKey = (inputObj, callback) => {
  return callback(inputObj, 2);
};
const findKeyByValue = (inputObject, value) => {
  for (const objectKey of Object.keys(inputObject)) {
    let subObject = inputObject[objectKey];
    if (subObject.stars === value) {
      return objectKey;
    }
  }
  return undefined;
};

const output = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, findKeyByValue); // => "noma"

assertEqual(output, "noma");