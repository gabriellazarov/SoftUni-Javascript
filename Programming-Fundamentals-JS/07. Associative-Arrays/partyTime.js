function solve(input) {
    let coming = input.splice(input.indexOf("PARTY"));
    coming.shift();
    let invited = input;
    let guestList = {};
    for (let number of invited) {
        if (Number(number[0]) >= 0) {
            guestList[number] = "VIP";
        } else {
            guestList[number] = "regular";
        }
    }
    for (let number of coming) {
        delete guestList[number];
    }
    console.log(Object.entries(guestList).length);
    for (let each of Object.entries(guestList)) {
        console.log(each[0]);
    }
}
solve([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])