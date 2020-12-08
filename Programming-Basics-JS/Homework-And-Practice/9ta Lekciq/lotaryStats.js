function stats(arg) {
    let n = Number(arg);
    let unevenUnderTen = 0;
    let even = 0;
    let unevenEndingWithSeven = 0;
    let dividers = 0;
    for (let i = 1; i <= n; i++) {
        if (i < 10 && i % 2 !== 0) unevenUnderTen++;
        if (i % 2 === 0) even++;
        if (i % 2 != 0 && i % 10 === 7) unevenEndingWithSeven++;
        if (100 % i === 0) dividers++;
    }
    console.log(`${((unevenUnderTen / n) * 100).toFixed(2)}%`);
    console.log(`${((even / n) * 100).toFixed(2)}%`);
    console.log(`${((unevenEndingWithSeven / n) * 100).toFixed(2)}%`);
    console.log(`${((dividers / n) * 100).toFixed(2)}%`);
}
stats(49);