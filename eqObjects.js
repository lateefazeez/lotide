
const eqArrays = require("./eqArrays");

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

module.exports = eqObjects;

