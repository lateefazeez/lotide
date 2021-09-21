const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("returns true for 'h", () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });
  it("returns true for 'e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
  it("returns true for 'l", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("returns true for 'o", () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });
});