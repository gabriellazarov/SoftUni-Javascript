function solve(input) {
    let password = input.shift();
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Done") break;
        else commands[i] = input[i].split(' ');
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "TakeOdd") {
            let temp = '';
            for (let j = 1; j < password.length; j += 2) {
                temp += password[j];
            }
            password = temp;
            console.log(password);
        } else if (commands[i][0] == "Cut") {
            let cut = password.substring(Number(commands[i][1]),Number(commands[i][1])+ Number(commands[i][2]));
            password = password.replace(cut, '');
            console.log(password);
        } else {
            if (password.includes(commands[i][1])) {
                while (password.includes(commands[i][1])) {
                    password = password.replace(commands[i][1], commands[i][2]);
                }
                console.log(password)
            } else console.log("Nothing to replace!")

        }
    }
    console.log(`Your password is: ${password}`)
}


solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
]);

solve([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
]);