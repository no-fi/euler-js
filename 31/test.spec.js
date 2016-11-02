const expect = require('chai').expect;
const count = require('./problem');

describe("Problem 31: Coin Sums", function () {
  it("should return a count of 1 way to make change for 1p", function () {
    expect(count(1)).to.equal(1);
  });
  it("should return a count of 3 ways to make change for 4p", function () {
    expect(count(4)).to.equal(3);
  });
});
