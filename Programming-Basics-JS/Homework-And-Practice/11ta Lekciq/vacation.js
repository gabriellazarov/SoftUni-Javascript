function yeet(input) {
    let moneyNeeded = Number(input[0]);
    let moneyOwned = Number(input[1]);
    let indexAction = 2;
    let indexMoney = 3;
    let brSpendingDays = 0;
    let days = 1;

    while (indexMoney < input.length) {
        if (input[indexAction] === "spend") {
            brSpendingDays++;
            if (brSpendingDays === 5) {
                console.log(`You can't save the money.`);
                console.log(days);
                break;
            }
        } else { brSpendingDays = 0; }
        if (input[indexAction] === "save") { moneyOwned += Number(input[indexMoney]); }
        else { moneyOwned = moneyOwned-Number(input[indexMoney]); }
        if (moneyOwned < 0) { moneyOwned = 0; }
        if (moneyOwned >= moneyNeeded) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }
        indexAction += 2;
        indexMoney += 2;
        days++;
    }
}
yeet(['250',
    '150',
    'spend',
    '50',
    'spend',
    '50',
    'save',
    '100',
    'save',
    '100'])