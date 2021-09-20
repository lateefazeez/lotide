const middle = require("../middle");
const { assert } = require("chai");

// assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => true
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true); // => true

// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true); // => true
 
describe("#middle", () => {
  it("returns true for [1, 2, 3]) and [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns true for [1, 2, 3, 4, 5] and [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns true for [1, 2, 3, 4] and [2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});