function solve(input) {
    let ores = {};
    for (let i = 0; i < input.length; i += 2) {
        if (ores.hasOwnProperty(input[i])) {
            ores[input[i]] += Number(input[i + 1]);
        }
        else {
            ores[input[i]] = Number(input[i + 1]);
        }
    }
    let output = Object.entries(ores);
    for (let fuck of output) {
        console.log(`${fuck[0]} -> ${fuck[1]}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )