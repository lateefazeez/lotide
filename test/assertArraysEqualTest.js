const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false