function vac(a, b, c) {
    let group = Number(a);
    let type = b;
    let day = c;
    let price;
    let priceMultiplier = 1;
    if (type == "Students" && group >= 30) priceMultiplier = 0.85;
    else if (type == "Regular" && group >= 10 && group <= 20) priceMultiplier = 0.95;
    if (type == "Students") {
        if (day == "Friday") price = 8.45;
        else if (day == "Saturday") price = 9.8;
        else price = 10.46;
    } else if (type == "Business") {
        if (day == "Friday") price = 10.9;
        else if (day == "Saturday") price = 15.6;
        else price = 16;
    } else {
        if (day == "Friday") price = 15;
        else if (day == "Saturday") price = 20;
        else price = 22.5;
    }
    if (type == "Business" && group >= 100) console.log(`Total price: ${((group - 10) * price * priceMultiplier).toFixed(2)}`);
    else console.log(`Total price: ${(group * price * priceMultiplier).toFixed(2)}`);
}
vac(25, "Students", "Friday")