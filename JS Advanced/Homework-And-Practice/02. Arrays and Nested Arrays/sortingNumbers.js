function solve(input) {
    let answer = [];
    input.sort((a, b) => a - b);
    while (input[0] != undefined) {
        let tempMin = input.shift();
        answer.push(tempMin);
        if (input[0] != undefined) {
            let tempMax = input.pop();
            answer.push(tempMax);
        }
    }
    return answer;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 100])