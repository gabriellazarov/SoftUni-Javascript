const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined if the argument is not a number', () => {
            expect(mathEnforcer.addFive('lol')).to.undefined;
        })
        it('should return undefined if the argument is not a number', () => {
            expect(mathEnforcer.addFive('1')).to.undefined;
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.addFive(0)).to.closeTo(5,0.01);
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.addFive(-5)).to.closeTo(0,0.01);
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.addFive(0.5)).to.closeTo(5.5,0.01);
        })
    });
    describe('subtractTen', () => {
        it('should return undefined if the input is not a number', () => {
            expect(mathEnforcer.subtractTen('1')).to.undefined;
        })
        it('should return undefined if the input is not a number', () => {
            expect(mathEnforcer.subtractTen('aaa')).to.undefined;
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(0)).to.closeTo(-10,0.01);
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(10)).to.closeTo(0,0.01);
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(-10)).to.closeTo(-20,0.01);
        })
        it('should return the correct result with a number parameter', () => {
            expect(mathEnforcer.subtractTen(10.5)).to.closeTo(0.5,0.01);
        })
    });
    describe('sum', () => {
        it('should return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('1', 1)).to.undefined;
        })
        it('should return undefined if the first parameter is not a number', () => {
            expect(mathEnforcer.sum('a', 1)).to.undefined;
        })
        it('should return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, '1')).to.undefined;
        })
        it('should return undefined if the second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, 'a')).to.undefined;
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(0, 1)).to.closeTo(1,0.01);
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(-5, -5)).to.closeTo(-10,0.01);
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(5, -5)).to.closeTo(0,0.01);
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(-5, 5)).to.closeTo(0,0.01);
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(-5.5, 5)).to.closeTo(-0.5,0.01);
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(0.5, 1)).to.closeTo(1.5,0.01);
        })
        it('should return the correct result with a correct input', () => {
            expect(mathEnforcer.sum(0.5, 1.5)).to.closeTo(2,0.01);
        })
    });
});