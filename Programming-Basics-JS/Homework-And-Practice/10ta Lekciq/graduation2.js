function average(input) {
    let name = input[0];
    let sum = Number(input[1]);
    let index = 2;
    let br = 0;
    while (index < 13) {
        if (br == 2) {
            console.log(`${name} has been excluded at ${index - 2} grade`);
            break;
        }
        if (Number(input[index]) < 4) br++;
        sum += Number(input[index]);
        index++;
    }
    if (sum >= 48 && br < 2) {
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
    '3',
    '2'])