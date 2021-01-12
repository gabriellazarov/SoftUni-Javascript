function solve(a, b) {
    let gcd;
    if (a >= b) {
        for (let i = b; i > 0; i--) {
            if (a % i == 0 && b % i == 0) {
                gcd = i;
                break;
            }
        }
    } else {
        for (let i = a; i > 0; i--) {
            if (a % i == 0 && b % i == 0) {
                gcd = i;
                break;
            }
        }
    }
    console.log(gcd);
}
solve(5, 15)