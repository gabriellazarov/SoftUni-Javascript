function solve(input) {
    let message = input.shift();
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Decode") break;
        else commands[i] = input[i].split('|');
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "Move") {
            message = message.slice(commands[i][1]) + message.slice(0, commands[i][1]);
        } else if (commands[i][0] == "Insert") {
            message = message.slice(0, commands[i][1]) + commands[i][2] + message.slice(commands[i][1]);
        } else {
            while (message.includes(commands[i][1])) {
                message = message.replace(commands[i][1], commands[i][2]);
            }
        }
    }
    console.log(`The decrypted message is ${message}`);
}

solve(['zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
])