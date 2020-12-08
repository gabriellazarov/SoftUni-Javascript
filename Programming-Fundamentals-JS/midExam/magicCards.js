function solve(input) {
    let cards = input.shift().split(':');
    let commands = [];
    let newDeck = [];
    for (let i = 0; i < input.length; i++) {
        commands[i] = input[i].split(' ');
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "Ready") {
            console.log(newDeck.join(' '));
        } else if (commands[i][0] == "Add") {
            if (cards.includes(commands[i][1])) {
                newDeck.push(commands[i][1]);
            } else console.log("Card not found.");
        } else if (commands[i][0] == "Insert") {
            if (cards.includes(commands[i][1]) && newDeck[commands[i][2]] != undefined) {
                newDeck.splice(commands[i][2], 0, commands[i][1]);
            } else console.log("Error!");
        } else if (commands[i][0] == "Remove") {
            if (newDeck.includes(commands[i][1])) {
                newDeck.splice(newDeck.indexOf(commands[i][1]), 1)
            } else console.log("Card not found.");
        } else if (commands[i][0] == "Swap") {
            if (newDeck.indexOf(commands[i][1]) > newDeck.indexOf(commands[i][2])) {
                let temp = commands[i][1];
                newDeck[newDeck.indexOf(commands[i][1])] = newDeck[newDeck.indexOf(commands[i][2])];
                newDeck[newDeck.indexOf(commands[i][2])] = temp;
            } else {
                let temp = commands[i][2];
                newDeck[newDeck.indexOf(commands[i][2])] = newDeck[newDeck.indexOf(commands[i][1])];
                newDeck[newDeck.indexOf(commands[i][1])] = temp;
            }
        } else if (commands[i][0] == "Shuffle") {
            for (let i = 0; i < newDeck.length / 2; i++) {
                let temp = newDeck[i];
                newDeck[i] = newDeck[newDeck.length - 1 - i];
                newDeck[newDeck.length - 1 - i] = temp;
            }
        }
    }
}

solve(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Pounce",
    "Add Bite",
    "Add Wrath",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Shuffle deck",
    "Ready"])
