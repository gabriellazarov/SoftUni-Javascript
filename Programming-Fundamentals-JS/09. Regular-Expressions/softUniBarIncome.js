function solve(input) {
    let regex = /%([A-Z][a-z]*)%[^|$%.]*<(\w+)>[^|$%.]*\|(\d+)\|[^|$%.\d]*([\d.]+)\$/g;
    let text = input.join(' ');
    let match = regex.exec(text);
    let sum = 0;
    while (match != null) {
        console.log(`${match[1]}: ${match[2]} - ${(Number(match[3]) * Number(match[4])).toFixed(2)}`);
        sum += Number(match[3]) * Number(match[4]);
        match = regex.exec(text);
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
}

solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
])