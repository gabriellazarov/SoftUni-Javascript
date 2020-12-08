function danceHall(l, w, a) {
    let freeArea = 0.9 * l * w - a * a;
    let dancers = Math.floor((freeArea * 10000) / 7040);
    console.log(dancers);
}
danceHall(50, 25, 2);