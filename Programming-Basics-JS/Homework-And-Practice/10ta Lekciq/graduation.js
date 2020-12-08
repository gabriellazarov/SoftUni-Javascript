function average(input) {
    let name = input[0];
    let sum = Number(input[1]);
    let index = 2;
    while (index < 13) {
        sum += Number(input[index]);
        index++;
    }
    if (sum >= 48) {
        console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`)
    }
}
average(['Pesho',
    '4',
    '5.5',
    '6',
    '5.43',
    '4.5',
    '6',
    '5.55',
    '5',
    '6',
    '6',
    '5.43',
    '5',
    '6'])