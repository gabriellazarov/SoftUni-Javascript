function radiansToDegrees(radians) {
    let deg = (radians * 180 / Math.PI).toFixed(0);
    console.log(deg);
}
radiansToDegrees(3.1416);