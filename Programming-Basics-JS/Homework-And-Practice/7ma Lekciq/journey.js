function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let destination = "";
    let cost = 0;
    if (budget <= 100) {
        destination = "Somewhere in Bulgaria";
        if (season === "winter") cost = 0.7 * budget;
        else cost = cost = 0.3 * budget;
    }
    else if (budget <= 1000) {
        destination = "Somewhere in Balkans";
        if (season === "winter") cost = 0.8 * budget;
        else cost = cost = 0.4 * budget;
    }
    else {
        destination = "Somewhere in Europe";
        cost = 0.9 * budget;
    }
    cost = cost.toFixed(2);
    let accommodation = "";
    if (destination === "Somewhere in Europe" || season === "winter") accommodation = "Hotel";
    else accommodation = "Camp";
    console.log(destination);
    console.log(`${accommodation} - ${cost}`);
}
journey(75, "Winter")