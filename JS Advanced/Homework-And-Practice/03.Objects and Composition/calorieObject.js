function solve(input) {
    const calories = {};
    for (let i = 0; i < input.length; i += 2) {
        calories[input[i]] = Number(input[i + 1]);
    }
    return calories;
}
console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))