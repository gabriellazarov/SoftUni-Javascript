function solve(input) {
    let winDay = 0;
    let days = Number(input[0]);
    let index = 1;
    let currentWins;
    let currentMoney;
    let totalMoney = 0;
    for (let i = 1; i <= days; i++) {
        currentWins = 0;
        currentMoney = 0;
        index++;
        while (input[index] !== "Finish") {
            if (input[index] === "win") {
                currentWins++;
                currentMoney += 20;
            }
            else if (input[index] === "lose") currentWins--;
            index++;
        }
        if (currentWins > 0) {
            currentMoney = 1.1 * currentMoney;
            winDay++;
        }
        else { winDay--; }
        totalMoney += currentMoney;
        index++;
    }
    if (winDay > 0) console.log(`You won the tournament! Total raised money: ${(totalMoney * 1.2).toFixed(2)}`);
    else console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
}
solve(
    [
        '3', 'darts',
        'lose', 'handball',
        'lose', 'judo',
        'win', 'Finish',
        'snooker', 'lose',
        'swimming', 'lose',
        'squash', 'lose',
        'table tennis', 'win',
        'Finish', 'volleyball',
        'win', 'basketball',
        'win', 'Finish'


    ]
)