function fruitShop(arg1, arg2, arg3) {
    let day = arg2;
    let fruit = arg1;
    let amount = Number(arg3);
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case "banana": console.log((2.50 * amount).toFixed(2)); break;
            case "apple": console.log((1.2 * amount).toFixed(2)); break;
            case "orange": console.log((0.85 * amount).toFixed(2)); break;
            case "grapefruit": console.log((1.45 * amount).toFixed(2)); break;
            case "kiwi": console.log((2.7 * amount).toFixed(2)); break;
            case "pineapple": console.log((5.5 * amount).toFixed(2)); break;
            case "grapes": console.log((3.85 * amount).toFixed(2)); break;
            default: console.log("error");
        }
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case "banana": console.log((2.70 * amount).toFixed(2)); break;
            case "apple": console.log((1.25 * amount).toFixed(2)); break;
            case "orange": console.log((0.9 * amount).toFixed(2)); break;
            case "grapefruit": console.log((1.6 * amount).toFixed(2)); break;
            case "kiwi": console.log((3 * amount).toFixed(2)); break;
            case "pineapple": console.log((5.6 * amount).toFixed(2)); break;
            case "grapes": console.log((4.2 * amount).toFixed(2)); break;
            default: console.log("error");
        }
    } else console.log("error");
}