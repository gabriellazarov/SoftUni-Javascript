function solve(input) {
    let n = Number(input.shift());
    let cars = [];
    let commands = [];
    for (let i = 0; i < n; i++) {
        cars[i] = input.shift().split('|');
        cars[i][1] = Number(cars[i][1]);
        cars[i][2] = Number(cars[i][2]);
    }
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Stop") break;
        else commands[i] = input[i].split(" : ");
    }
    for (let i = 0; i < commands.length; i++) {
        let index;
        for (let j = 0; j < cars.length; j++) {
            if (commands[i][1] == cars[j][0]) {
                index = j;
                break;
            }
        }
        if (commands[i][0] == "Drive") {
            if (Number(commands[i][3]) > cars[index][2]) console.log("Not enough fuel to make that ride");
            else {
                cars[index][1] += Number(commands[i][2]);
                cars[index][2] -= Number(commands[i][3]);
                console.log(`${cars[index][0]} driven for ${commands[i][2]} kilometers. ${commands[i][3]} liters of fuel consumed.`);
                if (cars[index][1] >= 100000) {
                    console.log(`Time to sell the ${cars[index][0]}!`);
                    cars.splice(index, 1);
                }
            }
        } else if (commands[i][0] == "Refuel") {
            if (cars[index][2] + Number(commands[i][2]) > 75) commands[i][2] = 75 - cars[index][2];
            cars[index][2] += Number(commands[i][2]);
            console.log(`${cars[index][0]} refueled with ${commands[i][2]} liters`);
        } else {
            cars[index][1] -= Number(commands[i][2]);
            console.log(`${cars[index][0]} mileage decreased by ${commands[i][2]} kilometers`);
            if (cars[index][1] < 10000) cars[index][1] = 10000;
        }
    }
    cars.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < cars.length - 1; i++) {
        if (cars[i][1] == cars[i + 1][1]) {
            if (cars[i][0].localeCompare(cars[i + 1][0]) > 0) {
                let temp = cars[i][0];
                cars[i][0] = cars[i + 1][0];
                cars[i + 1][0] = temp;
                i = 0;
            }
        }
    }
    for (let car of cars) {
        console.log(`${car[0]} -> Mileage: ${car[1]} kms, Fuel in the tank: ${car[2]} lt.`);
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);

