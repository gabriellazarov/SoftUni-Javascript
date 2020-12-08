function solve(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let gogo = Number(input[2]);
    let attempt = gogo * distance + Math.floor(distance / 50) * 30;
    if (attempt < record) {
        console.log(`Yes! The new record is ${attempt.toFixed(2)} seconds.`);
    } else console.log(`No! He was ${(attempt - record).toFixed(2)} seconds slower.`)
}
solve(['10164', '1400', '25'])