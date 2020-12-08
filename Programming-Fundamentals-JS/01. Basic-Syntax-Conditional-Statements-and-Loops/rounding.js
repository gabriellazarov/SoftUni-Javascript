function rnd(a, b) {
    let num = Number(a);
    let precision = Number(b);
    if (precision > 15) precision = 15;
    num = parseFloat(num.toFixed(precision));
    console.log(num);
}