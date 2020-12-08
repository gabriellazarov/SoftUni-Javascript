function max(input) {
    let amount = Number(input[0]);
    let maxx = Number(input[1]);
    for (let i = 2; i <= amount; i++) {
        if (maxx < Number(input[i])) maxx = input[i];
    }
    console.log(maxx);
}
max(['3', '100', '99', '110'])