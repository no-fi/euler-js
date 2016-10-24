const expect = require('chai').expect;
const fibs = require('./problem').fibs;
const solve = require('./problem').solve;

describe('Problem 2: Even Fibonacci numbers', () => {
  describe("fibs", function () {
    it("should be a function", function () {
      expect(fibs).to.be.a('function');
    });
    it("should return all Fibonacci numbers under n", function () {
      expect(fibs(10)).to.be.an('array');
      expect(fibs(89)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55]);
      expect(fibs(89 + 1)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });
  });
  describe("solve", function () {
    it("should be a function", function () {
      expect(solve).to.be.a('function');
    });
    it("should return the sum of only the even first n Fibonacci numbers", () => {
      expect(solve(10)).to.equal(10);
    });
  });
});
