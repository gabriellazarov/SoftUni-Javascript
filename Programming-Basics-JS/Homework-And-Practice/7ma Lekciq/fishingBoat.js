function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let people = Number(arg3);
    let priceMultiplier = 1;
    let price;
    if (season === "Spring") price = 3000;
    else if (season === "Summer" || season === "Autumn") price = 4200;
    else if (season === "Winter") price = 2600;
    if (people <= 6) priceMultiplier = priceMultiplier * 0.9;
    else if (people > 6 && people <= 11) priceMultiplier = priceMultiplier * 0.85;
    else if (people > 11) priceMultiplier = priceMultiplier * 0.75;
    if (season !== "Autumn" && people % 2 == 0) priceMultiplier = priceMultiplier * 0.95;
    if (budget >= price * priceMultiplier) console.log(`Yes! You have ${(budget - price * priceMultiplier).toFixed(2)} leva left.`)
    else console.log(`Not enough money! You need ${(price * priceMultiplier - budget).toFixed(2)} leva.`)
}
fishingBoat(3000, "Summer", 11)