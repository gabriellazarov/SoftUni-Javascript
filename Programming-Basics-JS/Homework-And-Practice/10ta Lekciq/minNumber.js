function min(input) {
    let amount = Number(input[0]);
    let minn = Number(input[1]);
    for (let i = 2; i <= amount; i++) {
        if (minn > Number(input[i])) minn = input[i];
    }
    console.log(minn);
}
min(['3', '100', '99', '110'])