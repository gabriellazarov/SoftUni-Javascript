function solve(input) {
    let searched = input.shift().split(' ');
    let querry = {};
    for (let word of searched) {
        querry[word] = 0;
    }
    for (let word of input) {
        if (querry.hasOwnProperty(word)) {
            querry[word]++;
        }
    }
    let answer = Object.entries(querry);
    answer.sort((a, b) => b[1] - a[1]);
    for(let each of answer){
        console.log(`${each[0]} - ${each[1]}`)
    }
}

solve([
    'this sentence In', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)