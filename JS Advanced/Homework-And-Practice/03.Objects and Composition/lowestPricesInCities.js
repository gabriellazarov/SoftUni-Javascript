function solve(input) {
    let towns = {};
    for (let element of input) {
        let temp = element.split(' | ');
        let townName = temp.shift();
        if (towns[townName] == undefined) {
            towns[townName] = {};
        }
        towns[townName][temp[0]] = Number(temp[1]);
    }
    let entriez = Object.entries(towns);
    let result = {};
    for (let entrie of entriez) {
        let scndEntriez = Object.entries(entrie[1]);
        for (let lmao of scndEntriez) {
            if (result[lmao[0]] != undefined) {
                if (lmao[1] < result[lmao[0]].price) {
                    result[lmao[0]].town = entrie[0];
                    result[lmao[0]].price = lmao[1];
                }
            } else {
                result[lmao[0]] = {};
                result[lmao[0]].town = entrie[0];
                result[lmao[0]].price = lmao[1];
            }
        }
    }
    let result2 = Object.entries(result);
    for (let element of result2) {
        console.log(`${element[0]} -> ${element[1].price} (${element[1].town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'])