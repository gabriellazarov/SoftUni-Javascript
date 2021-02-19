class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }
    set bankName(value) {
        this._bankName = value;
    }
    get bankName() {
        return this._bankName;
    }

    sameCustomer(personalId) {
        let flag = true;
        let currentCustomer;

        for (let customer of this.allCustomers) {
            if (customer.personalId == personalId) {
                currentCustomer = customer;
                flag = false;
                break;
            }
        }
        if (flag) {
            throw new Error('We have no customer with this ID!')
        }
        return currentCustomer;
    }

    newCustomer(customer) {
        for (let cust of this.allCustomers) {
            if (cust.firstName == customer.firstName && cust.lastName == customer.lastName && cust.personalId == customer.personalId) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
            }
        }

        let newCustomer = {};
        Object.assign(newCustomer, customer);
        newCustomer.transactions = [];
        this.allCustomers.push(newCustomer);
        return customer;
    }

    depositMoney(personalId, amount) {
        this.sameCustomer(personalId);

        let currentCustomer = this.sameCustomer(personalId);

        if (currentCustomer.totalMoney == undefined) currentCustomer.totalMoney = 0;

        currentCustomer.totalMoney += amount;

        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} made deposit of ${amount}$!`);

        return currentCustomer.totalMoney + '$';
    }

    withdrawMoney(personalId, amount) {
        this.sameCustomer(personalId);

        let currentCustomer = this.sameCustomer(personalId);

        if (currentCustomer.totalMoney < amount) {
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`);
        }


        currentCustomer.totalMoney -= amount;

        currentCustomer.transactions.unshift(`${currentCustomer.transactions.length + 1}. ${currentCustomer.firstName} ${currentCustomer.lastName} withdrew ${amount}$!`);

        return currentCustomer.totalMoney + '$';
    }

    customerInfo(personalId) {
        this.sameCustomer(personalId);

        let currentCustomer = this.sameCustomer(personalId);


        let output = `Bank name: ${this.bankName}\nCustomer name: ${currentCustomer.firstName} ${currentCustomer.lastName}\nCustomer ID: ${personalId}\nTotal Money: ${currentCustomer.totalMoney}$\nTransactions:`;

        for (let transaction of currentCustomer.transactions) {
            output += `\n${transaction}`;
        }
        return output;
    }
};


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
