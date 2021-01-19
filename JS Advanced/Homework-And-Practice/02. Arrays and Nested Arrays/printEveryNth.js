function solve(input, n) {
    let answer = [input[0]];
    for (let i = 1; i < input.length; i++) {
        if (i % n == 0) {
            answer.push(input[i]);
        }
    }
    return answer;
}