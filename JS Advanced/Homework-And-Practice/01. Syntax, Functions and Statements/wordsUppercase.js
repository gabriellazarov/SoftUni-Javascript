function solve(input) {
    let regex = /[a-zA-Z][a-z]*/g;
    let match = regex.exec(input);
    let answer = [];
    while (match != null) {
        answer.push(match[0].toUpperCase());
        match = regex.exec(input);
    }
    console.log(answer.join(", "))
}

solve('Hi, how are you?')