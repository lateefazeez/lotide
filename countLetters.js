const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`❤️❤️❤️ Assertion Passed: [actual] === ${actual}`);
  } else {
    console.log(`✅✅✅ Assertion Failed: [actual] !== ${expected}`);
  }
};

const countLetters = (inputString) => {
  let result = {};
  for (const letter of inputString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters('lighthouse in the house'));