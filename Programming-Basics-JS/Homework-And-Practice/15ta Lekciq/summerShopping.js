function solve(input) {
    let budget = Number(input[0]);
    let priceHavliq = Number(input[1]);
    let discount = Number(input[2]);
    let price = ((100 - discount) / 100) * (priceHavliq * 5 / 3 + 2 / 3 * priceHavliq * 0.75 + 1 / 3 * (2 / 3 * priceHavliq * 0.75 + priceHavliq));
    if (price > budget) console.log(`Annie's sum is ${price.toFixed(2)} lv. She needs ${(price - budget).toFixed(2)} lv. more.`);
    else console.log(`Annie's sum is ${price.toFixed(2)} lv. She has ${(budget - price).toFixed(2)} lv. left.`);
}
solve(['40', '15', '5', ''])