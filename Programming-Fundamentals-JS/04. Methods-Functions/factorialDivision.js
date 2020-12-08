function divideFactorials(a, b) {
    function factorial(a) {
        let br = a;
        for (let i = a - 1; i > 0; i--) {
            br *= i;
        }
        return br;
    }
    let faca = factorial(a);
    let facb = factorial(b);
    console.log((faca / facb).toFixed(2))
}
divideFactorials(5,2)