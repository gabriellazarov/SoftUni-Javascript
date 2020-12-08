function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let city = arg2;
    let amount = Number(arg3);
    if (product === "coffee") {
        if (city === "Sofia") console.log(amount * 0.5);
        else if (city === "Plovdiv") console.log(amount * 0.4);
        else if (city === "Varna") console.log(amount * 0.45);
    } else if (product === "water") {
        if (city === "Sofia") console.log(amount * 0.8);
        else if (city === "Plovdiv") console.log(amount * 0.7);
        else if (city === "Varna") console.log(amount * 0.7);
    } else if (product === "beer") {
        if (city === "Sofia") console.log(amount * 1.2);
        else if (city === "Plovdiv") console.log(amount * 1.15);
        else if (city === "Varna") console.log(amount * 1.1);
    } else if (product === "sweets") {
        if (city === "Sofia") console.log(amount * 1.45);
        else if (city === "Plovdiv") console.log(amount * 1.3);
        else if (city === "Varna") console.log(amount * 1.35);
    } else if (product === "peanuts") {
        if (city === "Sofia") console.log(amount * 1.6);
        else if (city === "Plovdiv") console.log(amount * 1.5);
        else if (city === "Varna") console.log(amount * 1.55);
    }
}
