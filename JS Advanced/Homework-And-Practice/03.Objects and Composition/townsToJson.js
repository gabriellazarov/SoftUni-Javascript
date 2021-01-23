function solve(input) {
    let result = [];
    for (let i = 1; i < input.length; i++) {
        let temp = input[i].split('|').filter(x => x);
        temp[0] = temp[0].trim();
        temp[1] = Number(Number(temp[1]).toFixed(2));
        temp[2] = Number(Number(temp[2]).toFixed(2));
        result.push({ Town: temp[0], Latitude: temp[1], Longitude: temp[2] });
    }
    console.log(JSON.stringify(result))
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])