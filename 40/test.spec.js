const expect = require('chai').expect;
const digits = require('./problem').digits;

describe("Problem 40: Champernowne's constant", function () {
  describe("digits", function () {
      it("should return an array of digits", function () {
        expect(digits()).to.deep.equal([]);
      });
      it("should return 1 as the 12th digit", function () {
        expect(digits([12])).to.deep.equal([1]);
      });
      it("should return an array of the digits at all provided positions", function () {
        expect(digits([1])).to.deep.equal([1]);
        expect(digits([1,10])).to.deep.equal([1, 1]);
      });
  });
});
