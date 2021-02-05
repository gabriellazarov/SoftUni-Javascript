const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven', () => {
    it('returns undefined on incorrect input', () => {
        expect(isOddOrEven(1)).to.undefined;
    });
    it('returns undefined on incorrect input', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });
    it('returns undefined on incorrect input', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });
})