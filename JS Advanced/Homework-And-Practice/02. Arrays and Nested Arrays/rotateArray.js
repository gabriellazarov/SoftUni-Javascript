function solve(input, n) {
    for (let i = 0; i < n; i++) {
        let temp = input.pop();
        input.unshift(temp);
    }
   console.log(input.join(' '))
}

solve(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15)