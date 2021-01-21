function solve(input) {
    const engines = {
        small: {
            power: 90,
            volume: 1800
        },
        normal: {
            power: 120,
            volume: 2400
        },
        monster: {
            power: 200,
            volume: 3500
        }
    };
    const carriages = {
        hatchback: {
            type: 'hatchback',
            color: input.color
        },
        coupe: {
            type: 'coupe',
            color: input.color
        }
    }
    let outputEngine = {};
    let outputCarriage = {};

    if (input.power <= 90) {
        outputEngine = Object.assign(outputEngine, engines.small);
    } else if (input.power <= 120) {
        outputEngine = Object.assign(outputEngine, engines.normal);
    } else {
        outputEngine = Object.assign(outputEngine, engines.monster);
    }

    if (input.carriage == 'hatchback') {
        outputCarriage = Object.assign(outputCarriage, carriages.hatchback);
    } else {
        outputCarriage = Object.assign(outputCarriage, carriages.coupe);
    }

    let outputWheels = [];
    if (input.wheelsize % 2 == 0) {
        outputWheels = [input.wheelsize - 1, input.wheelsize - 1, input.wheelsize - 1, input.wheelsize - 1];
    } else outputWheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    const output = {
        model: input.model,
        engine: outputEngine,
        carriage: outputCarriage,
        wheels: outputWheels
    };
    return output;
}
console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))