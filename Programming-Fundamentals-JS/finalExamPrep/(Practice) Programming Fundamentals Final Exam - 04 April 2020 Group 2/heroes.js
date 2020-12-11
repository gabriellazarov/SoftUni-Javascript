function solve(input) {
    let n = input.shift();
    let heroes = [];
    for (let i = 0; i < n; i++) {
        heroes[i] = input.shift().split(' ');
        heroes[i][1] = Number(heroes[i][1]);
        heroes[i][2] = Number(heroes[i][2]);
    }
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "End") break;
        else commands[i] = input[i].split(' - ');
    }
    for (let i = 0; i < commands.length; i++) {
        let index;
        for (let j = 0; j < n; j++) {
            if (commands[i][1] == heroes[j][0]) {
                index = j;
                break;
            }
        }
        if (commands[i][0] == "CastSpell") {
            if (heroes[index][2] >= Number(commands[i][2])) {
                heroes[index][2] -= Number(commands[i][2]);
                console.log(`${heroes[index][0]} has successfully cast ${commands[i][3]} and now has ${heroes[index][2]} MP!`);
            } else console.log(`${heroes[index][0]} does not have enough MP to cast ${commands[i][3]}!`)
        } else if (commands[i][0] == "TakeDamage") {
            heroes[index][1] -= Number(commands[i][2]);
            if (heroes[index][1] > 0) {
                console.log(`${heroes[index][0]} was hit for ${commands[i][2]} HP by ${commands[i][3]} and now has ${heroes[index][1]} HP left!`);
            } else {
                console.log(`${heroes[index][0]} has been killed by ${commands[i][3]}!`);
                heroes.splice(index, 1);
            }
        } else if (commands[i][0] == "Recharge") {
            if (Number(commands[i][2]) + heroes[index][2] > 200) commands[i][2] = 200 - heroes[index][2];
            heroes[index][2] += Number(commands[i][2]);
            console.log(`${heroes[index][0]} recharged for ${commands[i][2]} MP!`);
        } else {
            if (Number(commands[i][2]) + heroes[index][1] > 100) commands[i][2] = 100 - heroes[index][1];
            heroes[index][1] += Number(commands[i][2]);
            console.log(`${heroes[index][0]} healed for ${commands[i][2]} HP!`);
        }
    }
    heroes.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < heroes.length - 1; i++) {
        if (heroes[i][1] == heroes[i + 1][1]) {
            if (heroes[i][0].localeCompare(heroes[i + 1][0]) > 0) {
                let temp = heroes[i];
                heroes[i] = heroes[i + 1];
                heroes[i + 1] = temp;
                i = 0;
            }
        }
    }
    for (let hero of heroes) {
        console.log(hero[0]);
        console.log(`HP: ${hero[1]}`);
        console.log(`MP: ${hero[2]}`);
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);

