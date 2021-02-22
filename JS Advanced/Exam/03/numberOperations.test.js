const { expect } = require('chai');
const numberOperations = require('./numberOperations');

describe('numberOperations', () => {
    describe('powNumber', () => {
        it('correct input 1', () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });
        it('correct input 2', () => {
            expect(numberOperations.powNumber(1)).to.equal(1);
        });
        it('correct input 3', () => {
            expect(numberOperations.powNumber(3)).to.equal(9);
        });
    });
    describe('numberChecker', () => {
        it('incorrect input 1', () => {
            expect(numberOperations.numberChecker.bind(numberOperations, 'a')).to.throw('The input is not a number!');
        });
        it('less than 100', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
        });
        it('100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
        it('more than 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });
    });
    describe('sumArrays', () => {
        it('equal length arrays', () => {
            expect(numberOperations.sumArrays([1],[1])).to.deep.equal([2]);
        });
        it('first array longer', () => {
            expect(numberOperations.sumArrays([1,2],[1])).to.deep.equal([2,2]);
        });
        it('second array longer', () => {
            expect(numberOperations.sumArrays([1],[1,2])).to.deep.equal([2,2]);
        });
        it('one array empty', () => {
            expect(numberOperations.sumArrays([],[1,2,3])).to.deep.equal([1,2,3]);
        });
    });
});