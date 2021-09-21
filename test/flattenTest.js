const { assert } = require("chai");
const flatten = require("../flatten");


describe("#flatten", () => {
  it("returns true for [1, 2, [3, 4], 5, [6]] and [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});