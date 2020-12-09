function solve(input) {
    let key = input.shift();
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        commands[i] = input[i].split(">>>");
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "Contains") {
            if (key.includes(commands[i][1])) {
                console.log(`${key} contains ${commands[i][1]}`);
            } else console.log("Substring not found!");
        } else if (commands[i][0] == "Flip") {
            let temp = key.split("");
            if (commands[i][1] == "Upper") {
                for (let j = Number(commands[i][2]); j < Number(commands[i][3]); j++) {
                    temp[j] = temp[j].toUpperCase();
                }
            } else {
                for (let j = Number(commands[i][2]); j < Number(commands[i][3]); j++) {
                    temp[j] = temp[j].toLowerCase();
                }
            }
            key = temp.join("");
            console.log(key);
        } else if (commands[i][0] == "Slice") {
            key = key.slice(0, Number(commands[i][1])) + key.slice(Number(commands[i][2]));
            console.log(key);
        } else if (commands[i][0] == "Generate") {
            console.log(`Your activation key is: ${key}`);
        }
    }
}



solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
])

solve([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
])