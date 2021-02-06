const { expect } = require('chai');
const lookupChar = require('./charLookup');

describe('lookupChar', () => {
    it('returns undefined with wrong input on first argument', () => {
        expect(lookupChar(1, 1)).to.undefined;
    });
    it('returns undefined with wrong input on second argument', () => {
        expect(lookupChar('1', '1')).to.undefined;
    });
    it('checks if index is higher than possible', () => {
        expect(lookupChar('1', 1)).to.equal('Incorrect index');
    });
    it('checks if index is lower than possible', () => {
        expect(lookupChar('1', -1)).to.equal('Incorrect index');
    });
    it('returns the sought after character with correct inputs', () => {
        expect(lookupChar('1', 0)).to.equal('1');
    });
    //overloading
    it('returns the sought after character with correct inputs', () => {
        expect(lookupChar('hello', 2)).to.equal('l');
    });
    it('returns undefined with wrong input on second argument', () => {
        expect(lookupChar('1', 'a')).to.undefined;
    });
    it('returns undefined with wrong input on second argument', () => {
        expect(lookupChar('1', 1.5)).to.undefined;
    });
})