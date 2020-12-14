function solve(input) {
    let n = Number(input.shift());
    let users = [];
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Statistics") {
            break;
        }
        else {
            commands[i] = input[i].split("=");
        }
    }
    for (let i = 0; i < commands.length; i++) {
        let index = -1;
        for (let j = 0; j < users.length; j++) {
            if (commands[i][1] == users[j][0]) {
                index = j;
                break;
            }
        }
        if (commands[i][0] == "Add") {
            if (index == -1) {
                users.push([commands[i][1], Number(commands[i][2]), Number(commands[i][3])]);
            } 
        } else if (commands[i][0] == "Empty") {
            if (commands[i][1] == "All") {
                for (let k = 0; k < users.length; k++) {
                    users.pop();
                }
            } else {
                if (index != -1) {
                    users.splice(index, 1);
                }
            }
        } else {
            if (index != -1) {
                let check = -1;
                for (let k = 0; k < users.length; k++) {
                    if (commands[i][2] == users[k][0]) {
                        check = k;
                        break;
                    }
                }
                if (check != -1) {
                    users[index][1]++;
                    users[check][2]++;
                    if (users[index][1] + users[index][2] >= n) {
                        if(check>index) check--;
                        console.log(`${commands[i][1]} reached the capacity!`)
                        users.splice(index, 1);                       
                    }
                    if (users[check][1] + users[check][2] >= n) {
                        console.log(`${commands[i][2]} reached the capacity!`)
                        users.splice(check, 1);
                    }
                }
            }
        }
    }
    users.sort((a, b) => b[2] - a[2]);
    for (let i = 0; i < users.length - 1; i++) {
        if (users[i][2] == users[i + 1][2]) {
            if (users[i][0].localeCompare(users[i + 1][0]) >= 0) {
                let temp = users[i];
                users[i] = users[i + 1];
                users[i + 1] = temp;
                i = -1;
            }
        }
    }
    console.log(`Users count: ${users.length}`);
    for (let i = 0; i < users.length; i++) {
        console.log(`${users[i][0]} - ${users[i][1] + users[i][2]}`)
    }
}

solve([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
  ]);

solve([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
]);