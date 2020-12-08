function solve(input) {
    let players = input.map(a => a.split(": "));
    players.map(a => a[1] = a[1].split(", "));
    for (let i = 0; i < players.length; i++) {
        for (let j = players[i][1].length - 1; j >= 0; j--) {
            for (let z = j - 1; z >= 0; z--) {
                if (players[i][1][j] == players[i][1][z]) {
                    players[i][1].splice(z, 1);
                    z++;
                }
            }
        }
    }
    let register = {};
    for (let player of players) {
        if (register.hasOwnProperty(player[0])) {
            for (let each of player[1]) {
                let br = true;
                for (let card of register[player[0]]) {
                    if (each == card) br = false;
                }
                if (br) register[player[0]].push(each);
            }
        }
        else {
            register[player[0]] = player[1];
        }
    }
    for (let player of Object.keys(register)) {
        let sum = 0;
        let value = register[player].map(a => {
            if (a[0] == "J") {
                if (a[1] == "S") return 4 * 11;
                else if (a[1] == "H") return 3 * 11;
                else if (a[1] == "D") return 2 * 11;
                else if (a[1] == "C") return 1 * 11;
            } else if (a[0] == "Q") {
                if (a[1] == "S") return 4 * 12;
                else if (a[1] == "H") return 3 * 12;
                else if (a[1] == "D") return 2 * 12;
                else if (a[1] == "C") return 1 * 12;
            } else if (a[0] == "K") {
                if (a[1] == "S") return 4 * 13;
                else if (a[1] == "H") return 3 * 13;
                else if (a[1] == "D") return 2 * 13;
                else if (a[1] == "C") return 1 * 13;
            } else if (a[0] == "A") {
                if (a[1] == "S") return 4 * 14;
                else if (a[1] == "H") return 3 * 14;
                else if (a[1] == "D") return 2 * 14;
                else if (a[1] == "C") return 1 * 14;
            } else if (Number(a[0] + a[1]) >= 10) {
                if (a[2] == "S") return 4 * Number(a[0] + a[1]);
                else if (a[2] == "H") return 3 * Number(a[0] + a[1]);
                else if (a[2] == "D") return 2 * Number(a[0] + a[1]);
                else if (a[2] == "C") return 1 * Number(a[0] + a[1]);
            } else {
                if (a[1] == "S") return 4 * Number(a[0]);
                else if (a[1] == "H") return 3 * Number(a[0]);
                else if (a[1] == "D") return 2 * Number(a[0]);
                else if (a[1] == "C") return 1 * Number(a[0]);
            }
        });
        for (let each of value) {
            sum += each;
        }
        console.log(`${player}: ${sum}`)
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])