function power(arg) {
    let n = Number(arg);
    if (n % 2 == 0) {
        for (let i = 2; i <= n; i += 2) {
            console.log(`Current number: ${i}. Cube: ${i ** 3}`)
        }
    } else {
        for (let i = 1; i <= n; i += 2) {
            console.log(`Current number: ${i}. Cube: ${i ** 3}`)
        }
    }
}
power(5);