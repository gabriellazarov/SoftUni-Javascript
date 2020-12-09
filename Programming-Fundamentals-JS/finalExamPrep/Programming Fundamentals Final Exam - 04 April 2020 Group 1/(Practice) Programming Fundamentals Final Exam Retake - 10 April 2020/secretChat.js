function solve(input) {
    let concealedMessage = input.shift();
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Reveal") break;
        else {
            commands[i] = input[i].split(':|:');
        }
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "InsertSpace") {
            concealedMessage = concealedMessage.slice(0, commands[i][1]) + " " + concealedMessage.slice(commands[i][1]);
            console.log(concealedMessage);
        } else if (commands[i][0] == "Reverse") {
            if (concealedMessage.includes(commands[i][1])) {
                let msgTemp = concealedMessage.split('');
                let reverseTemp = msgTemp.splice(concealedMessage.indexOf(commands[i][1]), commands[i][1].length);
                for (let i = reverseTemp.length; i >= 0; i--) {
                    msgTemp.push(reverseTemp[i]);
                }
                concealedMessage = msgTemp.join('');
                console.log(concealedMessage);
            } else console.log("error");
        } else {
            while (concealedMessage.includes(commands[i][1])) {
                concealedMessage = concealedMessage.replace(commands[i][1], commands[i][2]);
            }
            console.log(concealedMessage);
        }
    }
    console.log(`You have a new text message: ${concealedMessage}`);
}


solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])


solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])