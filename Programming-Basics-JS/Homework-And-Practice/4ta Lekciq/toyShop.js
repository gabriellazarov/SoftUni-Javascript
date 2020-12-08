function shop(budget, puzzels, dolls, bears, minions, trucks) {
    let money = (puzzels * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2) * 0.9;
    let sum = puzzels + dolls + bears + minions + trucks
    if (sum >= 50) {
        money = money * 0.75;
        if (money >= budget) {
            console.log(`Yes! ${(money - budget).toFixed(2)} lv left.`)
        }
        else {
            console.log(`Not enough money! ${(budget - money).toFixed(2)} lv needed.`)
        }
    }
    else {
        if (money >= budget) {
            console.log(`Yes ${(money - budget).toFixed(2)} lv left.`)
        }
        else {
            console.log(`Not enough money! ${(budget - money).toFixed(2)} lv needed.`)
        }
    }

}
shop(320, 8, 2, 5, 5, 1)