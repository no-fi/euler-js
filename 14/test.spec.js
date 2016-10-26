const expect = require('chai').expect;
const collatz = require('./problem').collatz;

describe("Problem 14: Longest Collatz Sequence", function () {
  describe("collatz", function () {
    it("should be a function", function () {
      expect(collatz).to.be.a('function');
    });
    it("should return 1 when n is 1", function () {
      expect(collatz(1)).to.equal(1);
    });
    it("should return the number of terms in sequence starting with n until 1 is reached", function () {
        expect(collatz(13)).to.equal(10);
    });
  });
});
