function yeet(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let area = width * length;
    let index = 2;
    let current = Number(input[index]);
    while (index < input.length) {
        if (area < current) {
            console.log(`No more cake left! You need ${current - area} pieces more.`)
            break;
        }
        if (input[index] === "STOP") {
            console.log(`${area} pieces are left.`);
            break;
        } else {
            area -= current;
            index++;
            current = Number(input[index]);
        }
    }
}