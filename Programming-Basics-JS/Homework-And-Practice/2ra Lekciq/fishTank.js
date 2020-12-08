function fishTank(length, width, height, percent) {
    console.log((length * width * height * 0.001 * (100-percent) * 0.01).toFixed(3));
}
fishTank(85, 75, 47, 17);