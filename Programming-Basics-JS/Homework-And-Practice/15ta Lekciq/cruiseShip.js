function solve(input) {
    let cruise = input[0];
    let place = input[1];
    let nights = Number(input[2]);
    let price;
    if (place === "standard cabin") {
        switch (cruise) {
            case "Mediterranean": price = 27.5; break;
            case "Adriatic": price = 22.99; break;
            case "Aegean": price = 23; break;
        }
    } else if (place === "cabin with balcony") {
        switch (cruise) {
            case "Mediterranean": price = 30.2; break;
            case "Adriatic": price = 25; break;
            case "Aegean": price = 26.6; break;
        }
    } else {
        switch (cruise) {
            case "Mediterranean": price = 40.5; break;
            case "Adriatic": price = 34.99; break;
            case "Aegean": price = 39.8; break;
        }
    }
    if (nights > 7) price *= 0.75;
    console.log(`Annie's holiday in the ${cruise} sea costs ${(price * 4 * nights).toFixed(2)} lv.`)
}
solve(['Aegean', 'standard cabin', '10', ''])