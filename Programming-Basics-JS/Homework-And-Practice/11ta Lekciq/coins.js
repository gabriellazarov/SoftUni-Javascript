function yeet(arg) {
    let amount = Number(arg.shift());
    let br = 0;
    while (amount > 0) {
        if (amount >= 2) {
            amount -= 2;
        } else if (amount >= 1) {
            amount -= 1;
        } else if (amount >= 0.5) {
            amount -= 0.5;
        } else if (amount >= 0.2) {
            amount -= 0.2;
        } else if (amount >= 0.1) {
            amount -= 0.1;
        } else if (amount >= 0.05) {
            amount -= 0.05;
        } else if (amount >= 0.02) {
            amount -= 0.02;
        } else if (amount >= 0.01) {
            amount -= 0.01;
        }
        amount = Number(Math.round(amount + 'e+2') + "e-2")
        br++
    }
    console.log(br);
}