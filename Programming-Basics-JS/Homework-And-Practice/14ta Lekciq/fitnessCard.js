function solve(input) {
    let moneyWeHave = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];
    let moneyWeNeed = 0;
    if (gender === "m") {
        switch (sport) {
            case "Gym": moneyWeNeed = 42; break;
            case "Boxing": moneyWeNeed = 41; break;
            case "Yoga": moneyWeNeed = 45; break;
            case "Zumba": moneyWeNeed = 34; break;
            case "Dances": moneyWeNeed = 51; break;
            case "Pilates": moneyWeNeed = 39; break;
        }
    } else {
        switch (sport) {
            case "Gym": moneyWeNeed = 35; break;
            case "Boxing": moneyWeNeed = 37; break;
            case "Yoga": moneyWeNeed = 42; break;
            case "Zumba": moneyWeNeed = 31; break;
            case "Dances": moneyWeNeed = 53; break;
            case "Pilates": moneyWeNeed = 37; break;
        }
    }
    if (age <= 19) moneyWeNeed = moneyWeNeed * 0.8;
    if (moneyWeNeed > moneyWeHave) console.log(`You don't have enough money! You need $${(moneyWeNeed - moneyWeHave).toFixed(2)} more.`);
    else console.log(`You purchased a 1 month pass for ${sport}.`)
}