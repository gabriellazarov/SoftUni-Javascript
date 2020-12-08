function houseParty(arr) {
    let list = [];
    let current = [];
    let currentToText;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            current[j] = (arr[i])[j]
        }
        if (arr[i].includes("is going!")) {
            current.splice(-10);
            currentToText = current.join('');
            if (list.includes(currentToText)) {
                console.log(`${currentToText} is already in the list!`);
            } else list.push(currentToText);
        } else {
            current.splice(-14);
            currentToText = current.join('');
            if (list.includes(currentToText)) {
                for (let j = 0; j < list.length; j++) {
                    if (currentToText == list[j]) {
                        list.splice(j, 1);
                        break;
                    }
                }
            } else console.log(`${currentToText} is not in the list!`);
        }
    }
    console.log(list.join('\n'))
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'])

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])