function manipulator(arr1, arr2) {
    let commands = [];
    for (let i = 0; i < arr2.length; i++) {
        commands[i] = arr2[i].split(" ");
    }
    for (let i = 0; i < arr2.length; i++) {
        if (commands[i][0] == "print") {
            console.log("[ " + arr1.join(", ") + " ]");
            break;
        } else if (commands[i][0] == 'add') {
            arr1.splice(Number(commands[i][1]), 0, Number(commands[i][2]));
        } else if (commands[i][0] == 'addMany') {
            let br = 0;
            for (let j = 2; j < commands[i].length; j++) {
                arr1.splice(Number(commands[i][1]) + br, 0, Number(commands[i][j]));
                br++;
            }
        } else if (commands[i][0] == 'contains') {
            console.log(arr1.indexOf(Number(commands[i][1])))
        } else if (commands[i][0] == 'remove') {
            arr1.splice(commands[i][1], 1);
        } else if (commands[i][0] == 'shift') {
            let shiftEle;
            for (let j = 0; j < Number(commands[i][1]); j++) {
                shiftEle = arr1.shift();
                arr1.push(shiftEle);
            }
        } else if (commands[i][0] == 'sumPairs') {
            let tempArray = [];
            let br = 0;
            for (let j = 0; j < arr1.length; j += 2) {
                if (arr1[j + 1] == undefined) {
                    tempArray[br] = arr1[j];
                } else {
                    tempArray[br] = arr1[j] + arr1[j + 1]
                    br++;
                }
            }
            arr1 = tempArray;
        }
    }
}
manipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
manipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])
