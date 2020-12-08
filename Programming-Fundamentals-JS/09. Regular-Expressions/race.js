function solve(input) {
    let names = input.shift().split(", ");
    let scores = [];
    for (let i = 0; i < names.length; i++) {
        scores.push(0);
    }
    let regexName = /[A-Za-z]+/g;
    let regexNum = /\d/g;
    for (let i = 0; i < input.length; i++) {
        if (input[i] != "end of race") {
            let nameTemp = input[i].match(regexName).join('');
            let numTemp = input[i].match(regexNum);
            let sum = 0;
            for (let each of numTemp) {
                sum += Number(each);
            }
            if (names.includes(nameTemp)) {
                scores[names.indexOf(nameTemp)] += sum;
            }
        } else break;
    }
    let list = [];
    for (let i = 0; i < names.length; i++) {
        list[i] = [names[i], scores[i]];
    }
    list.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < list.length && i < 3; i++) {
        if (i == 0) console.log('1st place: ' + list[i][0]);
        if (i == 1) console.log('2nd place: ' + list[i][0]);
        if (i == 2) console.log('3rd place: ' + list[i][0]);
    }

}


solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
])