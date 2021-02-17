class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }
    get budget() {
        return this._budget;
    }

    shopping(product) {
        if (this.budget < Number(product[1])) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(product[0]);
        this.budget -= Number(product[1]);
        return `You have successfully bought ${product[0]}!`
    }

    recipes(recipe) {
        let list = recipe.productsList;
        let flag = true;
        for (let product of list) {
            if (this.products.includes(product) == false) {
                flag = false;
                break;
            }
        }
        if (flag) {
            this.dishes.push({ recipeName: recipe.recipeName, productList: list });
            return `${recipe.recipeName} has been successfully cooked!`;
        }
        throw new Error('We do not have this product');
    }

    inviteGuests(name, dish) {
        let flag = true;
        for (let el of this.dishes) {
            if (el.recipeName == dish) {
                flag = false;
                break;
            }
        }
        if (flag){
            throw new Error('We do not have this dish');
        }
        if (Object.keys(this.guests).includes(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let guests = Object.keys(this.guests);
        let firstGuest = guests.shift();
        let firstProducts;
        for (let recipe of this.dishes) {
            if (recipe.recipeName == this.guests[firstGuest]) {
                firstProducts = recipe.productList.join(', ');
                break;
            }
        }
        let output = `${firstGuest} will eat ${this.guests[firstGuest]}, which consists of ${firstProducts}`;

        for (let guest of guests) {
            let dish = this.guests[guest];
            let products;
            for (let recipe of this.dishes) {
                if (recipe.recipeName == dish) {
                    products = recipe.productList.join(', ');
                    break;
                }
            }
            output += `\n${guest} will eat ${dish}, which consists of ${products}`;
        }
        return output;
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
