function solve(a, b, c, d, e, f) {
    let start = Number(a);
    let operations = [];
    operations[0] = b;
    operations[1] = c;
    operations[2] = d;
    operations[3] = e;
    operations[4] = f;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "chop") {
            start /= 2;
        } else if (operations[i] == "dice") {
            start = Math.sqrt(start);
        } else if (operations[i] == "spice") {
            start++;
        } else if (operations[i] == "bake") {
            start *= 3;
        } else {
            start *= 0.8;
        }
        console.log(start);
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')