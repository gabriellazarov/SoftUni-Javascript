function solve(input) {
    let max = input[0];
    let answer = [input[0]];
    for (let i = 1; i < input.length; i++) {
        if (input[i] >= max) {
            max = input[i];
            answer.push(max);
        }
    }
    return answer;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])