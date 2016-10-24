const expect = require('chai').expect;
const fibs = require('./problem').fibs;
const solve = require('./problem').solve;

describe('Problem 2: Even Fibonacci numbers', () => {
  describe('fibs', () => {
    it('should be a function', () => {
      expect(fibs).to.be.a('function');
    });
    it('should return all Fibonacci numbers under n', () => {
      expect(fibs(10)).to.be.an('array');
      expect(fibs(89)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55]);
      expect(fibs(89 + 1)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    });
  });
  describe('solve', () => {
    it('should be a function', () => {
      expect(solve).to.be.a('function');
    });
    it('should return the sum of only the even-valued Fibonacci numbers under n', () => {
      expect(solve(10)).to.equal(10);
    });
  });
});
