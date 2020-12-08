function operation(a, b, c) {
    let sum = (x, y) => x + y;
    let subtract = (x, y) => x - y;
    console.log(subtract(sum(a, b), c))
}
operation(23,
    6,
    10)