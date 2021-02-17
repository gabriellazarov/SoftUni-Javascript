const dealership = require('./dealership');
const { expect } = require('chai');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('returning valid old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });
        it('returning invalid old car', () => {
            expect(dealership.newCarCost('invalid car model', 1)).to.equal(1);
        });
    });

    describe('carEquipment', () => {
        it('returns accurate array with valid input', () => {
            expect(dealership.carEquipment(['equipment1'], [0])).to.deep.equal(['equipment1']);
        });
        it('returns accurate array with valid input overloading', () => {
            expect(dealership.carEquipment(['equipment1', 'equipment2', 'equipment3', 'equipment4'], [0, 2, 3])).to.deep.equal(['equipment1', 'equipment3', 'equipment4']);
        });
    });

    describe('euroCategory', () => {
        it('category<4', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it('category=4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
        it('category>4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});