function fun(a) {
    let n = Number(a);
    let red;
    for (let i = 1; i <= n; i++) {
        red = i;
        for (let j = 1; j < i; j++) {
            red += " " + String(i)
        }
        console.log(red)
    }
}
fun(5)