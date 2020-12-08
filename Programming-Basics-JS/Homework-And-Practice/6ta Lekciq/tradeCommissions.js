function trade(arg1, arg2) {
    let city = arg1;
    let amount = Number(arg2);
    if (amount >= 0 && amount <= 500) {
        switch (city) {
            case "Sofia": console.log((0.05 * amount).toFixed(2)); break;
            case "Varna": console.log((0.045 * amount).toFixed(2)); break;
            case "Plovdiv": console.log((0.055 * amount).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (amount > 500 && amount <= 1000) {
        switch (city) {
            case "Sofia": console.log((0.07 * amount).toFixed(2)); break;
            case "Varna": console.log((0.075 * amount).toFixed(2)); break;
            case "Plovdiv": console.log((0.08 * amount).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (amount > 1000 && amount <= 10000) {
        switch (city) {
            case "Sofia": console.log((0.08 * amount).toFixed(2)); break;
            case "Varna": console.log((0.1 * amount).toFixed(2)); break;
            case "Plovdiv": console.log((0.12 * amount).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else if (amount > 10000) {
        switch (city) {
            case "Sofia": console.log((0.12 * amount).toFixed(2)); break;
            case "Varna": console.log((0.13 * amount).toFixed(2)); break;
            case "Plovdiv": console.log((0.145 * amount).toFixed(2)); break;
            default: console.log("error"); break;
        }
    } else console.log("error");
}