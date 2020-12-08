function solve(input1, input2) {
    let words = input1.split(', ');
    for (let i = 0; i < words.length; i++) {
        input2 = input2.replace('*'.repeat(words[i].length), words[i]);
    }
    console.log(input2);
}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages')