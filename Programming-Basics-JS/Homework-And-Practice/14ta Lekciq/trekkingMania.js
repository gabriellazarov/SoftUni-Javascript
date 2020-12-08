function solve(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilim = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;
    for (let i = 1; i <= groups; i++) {
        if (Number(input[i]) <= 5) {
            musala += Number(input[i]);
        } else if (Number(input[i]) <= 12) {
            monblan += Number(input[i]);
        } else if (Number(input[i]) <= 25) {
            kilim += Number(input[i]);
        } else if (Number(input[i]) <= 40) {
            k2 += Number(input[i]);
        } else {
            everest += Number(input[i]);
        }
        total += Number(input[i]);
    }
    console.log(`${(musala * 100 / total).toFixed(2)}%`);
    console.log(`${(monblan * 100 / total).toFixed(2)}%`);
    console.log(`${(kilim * 100 / total).toFixed(2)}%`);
    console.log(`${(k2 * 100 / total).toFixed(2)}%`);
    console.log(`${(everest * 100 / total).toFixed(2)}%`);
}