function solve(input) {
    let string = input.shift();
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Done") break;
        else commands[i] = input[i].split(" ");
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "Change") {
            while (string.includes(commands[i][1])) {
                string = string.replace(commands[i][1],commands[i][2]);
            }
            console.log(string);
        } else if (commands[i][0] == "Includes") {
            if (string.includes(commands[i][1])) console.log("True");
            else console.log("False");
        } else if (commands[i][0] == "End") {
            if (string.slice(string.length - commands[i][1].length) == commands[i][1]) console.log("True");
            else console.log("False");
        } else if (commands[i][0] == "Uppercase") {
            string = string.toUpperCase();
            console.log(string);
        } else if (commands[i][0] == "FindIndex") {
            console.log(string.indexOf(commands[i][1]));
        } else {
            string = string.slice(Number(commands[i][1]),Number(commands[i][1])+Number(commands[i][2]));
            console.log(string);
        }
    }
}

solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);
solve();