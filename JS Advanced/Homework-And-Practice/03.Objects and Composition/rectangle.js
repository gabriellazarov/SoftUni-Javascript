function rectangle(width, height, color) {
    const object = {
        width: width,
        height: height,
        color: color,
        calcArea() {
            return this.height*this.width;
        }
    }
    return object;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());


