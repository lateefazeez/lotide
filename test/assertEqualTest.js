const { assert } = require("chai");
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs" , "Bootcamp"), false);
  });
  it("returns true for 1 and 1", () => {
    assert.strictEqual(assertEqual(1 , 1), true);
  });
});