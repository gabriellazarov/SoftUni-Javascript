function solve(input) {
    let friendsList = input.shift().split(", ");
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        commands[i] = input[i].split(" ");
    }
    let blacklistedNames = 0;
    let countOfLostNames = 0;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == 'Blacklist') {
            if (friendsList.includes(commands[i][1])) {
                console.log(`${commands[i][1]} was blacklisted.`);
                friendsList[friendsList.indexOf(commands[i][1])] = "Blacklisted";
                blacklistedNames++;
            } else console.log(`${commands[i][1]} was not found.`)
        } else if (commands[i][0] == 'Error') {
            if (friendsList[commands[i][1]] != "Blacklisted" && friendsList[commands[i][1]] != "Lost" && friendsList[commands[i][1]] != undefined) {
                console.log(`${friendsList[commands[i][1]]} was lost due to an error.`);
                friendsList[commands[i][1]] = "Lost";
                countOfLostNames++;
            }
        } else if (commands[i][0] == 'Change') {
            if (friendsList[commands[i][1]] != undefined && friendsList[commands[i][1]] != "Lost" && friendsList[commands[i][1]] != "Blacklisted") {
                console.log(`${friendsList[commands[i][1]]} changed his username to ${commands[i][2]}.`);
                friendsList[commands[i][1]] = commands[i][2];
            }
        } else if (commands[i][0] == 'Report') {
            console.log(`Blacklisted names: ${blacklistedNames}`);
            console.log(`Lost names: ${countOfLostNames}`);
            console.log(friendsList.join(' '));
        }
    }
}


solve(["Mike, John, Eddie",
    "Blacklist Mie",
    "Error 0",
    "Error 1",
    "Change 2 Mike123",
    "Report"])


solve(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Blacklist Eddie",
    "Report"])
