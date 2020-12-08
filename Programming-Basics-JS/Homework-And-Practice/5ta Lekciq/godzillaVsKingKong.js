function fun(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let broiStatisti = Number(arg2);
    let priceObleklo = Number(arg3) * broiStatisti;
    let decorations = 0.1 * budget;
    if (broiStatisti > 150) {
        priceObleklo = priceObleklo * 0.9;
    }
    if ((decorations + priceObleklo) > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(decorations + priceObleklo - budget).toFixed(2)} leva more.`)
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - (decorations + priceObleklo)).toFixed(2)} leva left.`)
    }
}
