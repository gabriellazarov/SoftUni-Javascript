function newHouse(arg1, arg2, arg3) {
    let type = arg1;
    let amount = Number(arg2);
    let budget = Number(arg3);
    let price;
    let priceMultiplier = 1;
    if (type === "Roses") price = 5;
    else if (type === "Dahlias") price = 3.8;
    else if (type === "Tulips") price = 2.8;
    else if (type === "Narcissus") price = 3;
    else if (type === "Gladiolus") price = 2.5;
    if (type === "Roses" && amount > 80) priceMultiplier = priceMultiplier * 0.9;
    else if (type === "Dahlias" && amount > 90) priceMultiplier = priceMultiplier * 0.85;
    else if (type === "Tulips" && amount > 80) priceMultiplier = priceMultiplier * 0.85;
    else if (type === "Narcissus" && amount < 120) priceMultiplier = priceMultiplier * 1.15;
    else if (type === "Gladiolus" && amount < 80) priceMultiplier = priceMultiplier * 1.2;
    if (budget >= amount * price * priceMultiplier) console.log(`Hey, you have a great garden with ${amount} ${type} and ${(budget - amount * price * priceMultiplier).toFixed(2)} leva left.`)
    else console.log(`Not enough money, you need ${(amount * price * priceMultiplier - budget).toFixed(2)} leva more.`)
}