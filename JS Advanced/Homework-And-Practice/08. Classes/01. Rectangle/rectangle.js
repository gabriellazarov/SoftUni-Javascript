class rect {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        if (color[0].toUpperCase() != color[0]) {
            this.color = color[0].toUpperCase() + color.slice(1);
        } else {
            this.color = color;
        }
    }

    calcArea() {
        return this.width * this.height;
    }
}