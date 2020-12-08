function name(a, b) {
    let start = Number(a);
    let end = Number(b);
    let sum = 0;
    let redica = "";
    for (let i = start; i <= end; i++) {
        redica += " " + String(i);
        sum += i;
    }
    console.log(redica);
    console.log(`Sum: ${sum}`);
}
name(5, 10)