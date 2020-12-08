function cinema(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);
    if (type === "Premiere") {
        console.log((rows * columns * 12).toFixed(2));
    } else if (type === "Normal") {
        console.log((rows * columns * 7.5).toFixed(2));
    } else if (type === "Discount") {
        console.log((rows * columns * 5).toFixed(2));
    }

}