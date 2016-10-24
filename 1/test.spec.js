const expect = require('chai').expect;
const solve = require('./problem');

describe('Problem 1: Multiples of 3 and 5', () => {
  describe('solve', () => {
    it('should be a function', () => {
      expect(solve).to.be.a('function');
    });
    it('should return a number', () => {
      expect(solve(10)).to.be.a('number');
    });
    it('should return the sum of numbers below n', () => {
      expect(solve(10)).to.equal(23);
    });
  });
});
