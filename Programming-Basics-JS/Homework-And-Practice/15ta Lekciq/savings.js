function solve(input) {
    let salary = Number(input[0]);
    let months = Number(input[1]);
    let expenses = Number(input[2]);
    console.log(`She can save ${(100 / (months * salary / (months * (0.7 * salary - expenses)))).toFixed(2)}%`);
    console.log((months * (0.7 * salary - expenses)).toFixed(2))
}
solve(['1500', '3', '800'])