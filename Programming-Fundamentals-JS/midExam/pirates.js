function solve(a, b, c) {
    let days = Number(a);
    let dailyPluncer = Number(b);
    let expectedPlunder = Number(c);
    let collected = 0;
    for (let i = 1; i <= days; i++) {
        collected += dailyPluncer;
        if (i % 3 == 0) collected += dailyPluncer / 2;
        if (i % 5 == 0) collected *= 0.7;
    }
    if (collected >= expectedPlunder) console.log(`Ahoy! ${collected.toFixed(2)} plunder gained.`);
    else console.log(`Collected only ${((collected / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
}

solve(5, 40, 100);
solve(10, 20, 380);