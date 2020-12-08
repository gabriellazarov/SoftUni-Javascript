function solve(input) {
    let competitors = input[0];
    let index = 0;
    let nameCurrent;
    let typeOfSweet;
    let amountBaked;
    let sumBaked = 0;
    let cookiesCurrent;
    let cakesCurrent;
    let wafflesCurrent;
    let money = 0;
    for (let i = 0; i < competitors; i++) {
        index++;
        nameCurrent = input[index];
        cookiesCurrent = 0;
        cakesCurrent = 0;
        wafflesCurrent = 0;
        while (2 > 1) {
            index++;
            typeOfSweet = input[index];
            if (typeOfSweet === "Stop baking!") break;
            index++;
            amountBaked = Number(input[index]);
            sumBaked += amountBaked;
            if (typeOfSweet == "cookies") {
                cookiesCurrent += amountBaked;
                money += amountBaked * 1.5;
            } else if (typeOfSweet == "cakes") {
                cakesCurrent += amountBaked;
                money += amountBaked * 7.8;
            } else {
                wafflesCurrent += amountBaked;
                money += amountBaked * 2.3;
            }
        }
        console.log(`${nameCurrent} baked ${cookiesCurrent} cookies, ${cakesCurrent} cakes and ${wafflesCurrent} waffles.`)
    }
    console.log(`All bakery sold: ${sumBaked}`);
    console.log(`Total sum for charity: ${money.toFixed(2)} lv.`)
}


solve([
    '3', 'Iva',
    'cookies', '5',
    'cakes', '3',
    'Stop baking!', 'George',
    'cakes', '7',
    'waffles', '2',
    'Stop baking!', 'Ivan',
    'cookies', '6',
    'Stop baking!'
])