function area(figure, size1, size2) {
    if (figure == "square") {
        console.log((size1 * size1).toFixed(3));
    }
    else if (figure == "rectangle") {
        console.log((size1 * size2).toFixed(3));
    }
    else if (figure == "circle") {
        console.log((size1 * size1 * Math.PI).toFixed(3));
    }
    else if (figure == "triangle") {
        console.log((size1 * size2 / 2).toFixed(3));
    }
}
area("rectangle", 2, 3)