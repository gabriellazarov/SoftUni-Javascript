function solve(input) {
    let bitcoins = Number(input[0]);
    let chineseMoney = Number(input[1]);
    let tax = Number(input[2]);
    let sum = ((100 - tax) / 100) * ((bitcoins * 1168 + chineseMoney * 0.15 * 1.76) / 1.95);
    console.log(sum.toFixed(2));
}
solve(['1', '5', '5'])