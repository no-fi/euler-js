const expect = require('chai').expect;
const digits = require('./problem').digits;

describe('Problem 40: Champernowne\'s constant', () => {
  describe('digits', () => {
      it('should return an array of digits', () => {
        expect(digits()).to.deep.equal([]);
      });
      it('should return 1 as the 12th digit', () => {
        expect(digits([12])).to.deep.equal([1]);
      });
      it('should return an array of the digits at all provided positions', () => {
        expect(digits([1])).to.deep.equal([1]);
        expect(digits([1,10])).to.deep.equal([1, 1]);
      });
  });
});
