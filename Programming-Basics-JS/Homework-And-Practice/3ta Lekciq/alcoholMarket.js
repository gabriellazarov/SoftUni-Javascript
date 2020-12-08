function alcoholMarket(price, bira, vino, rakiq, whiskey) {
    let sum = price * whiskey + price / 2 * rakiq + price / 2 * 0.6 * vino + price / 2 * 0.2 * bira;
    console.log(sum.toFixed(2));
}
alcoholMarket(50, 10, 3.5, 6.5, 1);