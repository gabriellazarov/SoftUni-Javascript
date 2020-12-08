function solve(input) {
    let n = Number(input[0]);
    let br = 1;
    let current;
    for (let i = 1; i > 0; i++) {
        current = '';
        for (let j = 1; j <= i; j++) {
            current += `${br} `
            br++;
            if (br === n + 1) break;
        }
        console.log(current);
        if (br === n + 1) break;
    }
}
solve([`5`])