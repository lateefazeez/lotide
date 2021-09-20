const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => true
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => true

assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => true
 