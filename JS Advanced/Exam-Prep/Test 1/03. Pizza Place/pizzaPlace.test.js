const pizzUni = require('./pizzaPlace')
const { expect } = require('chai');

describe('pizzUni', () => {
    it('make an order', () => {
        let pizza1 = { orderedPizza: 'pizza', orderedDrink: 'drink' };
        let pizza2 = { orderedPizza: 'pizza' };
        let pizza3 = { orderedDrink: 'drink' };
        let pizza4 = {};
        //no pizza
        expect(pizzUni.makeAnOrder.bind(pizzUni, pizza3)).to.throw('You must order at least 1 Pizza to finish the order.');

        //no drink
        expect(pizzUni.makeAnOrder(pizza2)).to.equal(`You just ordered ${pizza2.orderedPizza}`);

        //no content
        expect(pizzUni.makeAnOrder.bind(pizzUni, pizza4)).to.throw('You must order at least 1 Pizza to finish the order.');

        //both pizza and drink
        expect(pizzUni.makeAnOrder(pizza1)).to.equal(`You just ordered ${pizza1.orderedPizza} and ${pizza1.orderedDrink}.`);
    });

    it('get remaining work', () => {
        //single ready
        let status1 = [{ pizzaName: 'pizza', status: 'ready' }];
        expect(pizzUni.getRemainingWork(status1)).to.equal('All orders are complete!');

        //single preparing
        let status2 = [{ pizzaName: 'pizza', status: 'preparing' }];
        expect(pizzUni.getRemainingWork(status2)).to.equal(`The following pizzas are still preparing: ${status2[0].pizzaName}.`);

        //multiple pizzas
        let status3 = [{ pizzaName: 'pizza1', status: 'preparing' }, { pizzaName: 'pizza1', status: 'ready' }, { pizzaName: 'pizza1', status: 'preparing' }];
        expect(pizzUni.getRemainingWork(status3)).to.equal(`The following pizzas are still preparing: ${status3[0].pizzaName}, ${status3[2].pizzaName}.`);
    });

    it('order type', () => {
        //carryout
        expect(pizzUni.orderType(1,'Carry Out')).to.equal(0.9);

        //delivery
        expect(pizzUni.orderType(1,'Delivery')).to.equal(1);
    });
});