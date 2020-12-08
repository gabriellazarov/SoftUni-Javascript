function skiTrip(arg1, arg2, arg3) {
    let days = Number(arg1) - 1;
    let room = arg2;
    let score = arg3;
    let priceMultiplier = 1;
    if (score === "negative") priceMultiplier = 0.9;
    else if (score === "positive") priceMultiplier = 1.25;
    if (room === "room for one person") console.log((18 * days * priceMultiplier).toFixed(2));
    else if (room === "apartment") {
        if (days < 10) priceMultiplier = priceMultiplier * 0.7;
        else if (days >= 10 && days <= 15) priceMultiplier = priceMultiplier * 0.65;
        else priceMultiplier = priceMultiplier * 0.5;
        console.log((25 * days * priceMultiplier).toFixed(2));
    } else if (room === "president apartment") {
        if (days < 10) priceMultiplier = priceMultiplier * 0.9;
        else if (days >= 10 && days <= 15) priceMultiplier = priceMultiplier * 0.85;
        else priceMultiplier = priceMultiplier * 0.8;
        console.log((35 * days * priceMultiplier).toFixed(2));
    }
}