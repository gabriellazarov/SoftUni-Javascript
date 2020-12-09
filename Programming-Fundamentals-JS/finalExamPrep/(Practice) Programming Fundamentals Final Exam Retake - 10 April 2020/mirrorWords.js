function solve(input) {
    let text = input.shift();
    let regex = /([@,#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g
    let wordPairs = 0;
    let mirrorPairs = [];
    let match = regex.exec(text);
    while (match != null) {
        if (match[2].length == match[3].length) {
            let br = 0;
            for (let i = 0; i < match[2].length; i++) {
                if (match[2][i] == match[3][match[2].length - i - 1]) br++;
            }
            if (br == match[2].length) mirrorPairs.push(`${match[2]} <=> ${match[3]}`);
        }
        wordPairs++;
        match = regex.exec(text);
    }
    if (wordPairs) console.log(`${wordPairs} word pairs found!`);
    else console.log("No word pairs found!");
    if (mirrorPairs.length) {
        console.log("The mirror words are:");
        console.log(mirrorPairs.join(', '));
    } else console.log("No mirror words!");
}



solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);

