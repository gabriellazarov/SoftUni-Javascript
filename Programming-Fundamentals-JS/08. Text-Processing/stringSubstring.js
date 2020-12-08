function solve(input1, input2) {
    input1 = input1.toLowerCase();
    input2 = input2.split(" ");
    for (let i = 0; i < input2.length; i++) {
        input2[i] = input2[i].toLowerCase();
    }
    if (input2.includes(input1) > 0) console.log(input1);
    else console.log(`${input1} not found!`)
}

solve('javascript',
    'JavaScript is the best programming language')