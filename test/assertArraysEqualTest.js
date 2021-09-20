const { assert } = require("chai");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

describe("#assertArraysEqual", () => {
  it("should return true for eqArrays([1, 2, 3], [1, 2, 3])", () => {
    assert.strictEqual(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });
  it("should return false for eqArrays([1, 2, 3], [3, 2, 1])", () => {
    assert.strictEqual(assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true));
  });
});