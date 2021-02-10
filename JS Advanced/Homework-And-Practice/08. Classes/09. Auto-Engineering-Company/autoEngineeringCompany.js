function solve(input) {
    let carBrands = {};

    for (let elemenet of input) {
        let current = elemenet.split(' | ');
        if (carBrands[current[0]] == undefined) {
            carBrands[current[0]] = {};
        }
        if (carBrands[current[0]][current[1]] == undefined) {
            carBrands[current[0]][current[1]] = 0;
        }
        carBrands[current[0]][current[1]] += Number(current[2]);
    }
    for (let key of Object.keys(carBrands)) {
        console.log(key);
        for (let car of Object.keys(carBrands[key])) {
            console.log(`###${car} -> ${carBrands[key][car]}`);
        }
    }
}


solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])