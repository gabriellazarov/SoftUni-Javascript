function smallest(a, b, c) {
    let min = a;
    if (b < a) {
        min = b;
        if (c < b) {
            min = c;
        }
    } else {
        if (c < a) {
            min = c;
        }
    }
    console.log(min)
}