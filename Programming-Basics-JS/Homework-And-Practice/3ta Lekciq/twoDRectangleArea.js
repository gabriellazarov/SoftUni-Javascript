function twoDRectangleArea(x1, y1, x2, y2) {
    let a = Math.abs(x1 - x2);
    let b = Math.abs(y1 - y2);
    let area = (a * b).toFixed(2);
    let perimeter = ((a + b) * 2).toFixed(2);
    console.log(area);
    console.log(perimeter);
}
twoDRectangleArea(60, 20, 10, 50);