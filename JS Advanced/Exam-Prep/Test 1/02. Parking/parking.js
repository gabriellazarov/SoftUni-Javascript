class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.vehicles.length == this.capacity) {
            throw new Error('Not enough parking space.');
        } else {
            this.vehicles.push({ carModel: carModel, carNumber: carNumber, payed: false });
            return (`The ${carModel}, with a registration number ${carNumber}, parked.`)
        }
    }

    removeCar(carNumber) {
        let index = undefined;

        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].carNumber == carNumber) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            if (this.vehicles[index].payed == false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
            } else {
                this.vehicles.splice(index, 1);
                return `${carNumber} left the parking lot.`;
            }
        } else {
            throw new Error("The car, you're looking for, is not found.");
        }
    }

    pay(carNumber) {
        let index = undefined;

        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].carNumber == carNumber) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            if (this.vehicles[index].payed) {
                throw new Error(`${carNumber}'s driver has already payed his ticket.`);
            } else {
                this.vehicles[index].payed = true;
                return `${carNumber}'s driver successfully payed for his stay.`;
            }
        } else {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
    }

    getStatistics(...params) {
        if (params[0] == undefined) {
            let output = `The Parking Lot has ${this.capacity - this.vehicles.length} empty slots left.`
            let sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            for (let car of sorted) {
                let paid = 'Not payed';
                if (car.payed) paid = 'Has payed';
                output += `\n${car.carModel} == ${car.carNumber} - ${paid}`;
            }
            return output;
        }
        let car;
        for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].carNumber == params[0]) {
                car = this.vehicles[i];
                break;
            }
        }
        let paid = 'Not payed';
        if (car.payed) paid = 'Has payed';
        return `${car.carModel} == ${car.carNumber} - ${paid}`;
    }
}


const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.getStatistics("TX3691CA"));
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

