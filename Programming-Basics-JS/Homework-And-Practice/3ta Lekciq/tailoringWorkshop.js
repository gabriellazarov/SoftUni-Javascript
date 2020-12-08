function tailoringWorkshop(tables, tlength, twidth) {
    let sum = ((tlength / 2) * (tlength / 2) * 9 + ((tlength * 100 + 60) * (twidth * 100 + 60)) / 10000 * 7) * tables;
    console.log(sum.toFixed(2) + " USD")
    console.log((sum * 1.85).toFixed(2) + " BGN")
}
tailoringWorkshop(5, 1, 0.5);