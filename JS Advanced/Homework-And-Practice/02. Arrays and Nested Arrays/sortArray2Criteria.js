function solve(input) {
    input.sort((a, b) => {
        if (a.length > b.length) return 1;
        else if (a.length < b.length) return -1;
        else return a.localeCompare(b);
    })
    for (let el of input) {
        console.log(el);
    }
}

solve(['test',
    'Deny',
    'omen',
    'Default'])