const { assert } = require("chai");
const eqArrays = require("../eqArrays");

describe("#assertArraysEqual", () => {
  it("should return true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
});