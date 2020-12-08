function power(arg) {
    let n = Number(arg);
    for (let i = 0; i <= n; i+=2) {
        console.log(Math.pow(2,i));
    }
}
power(2);
