function solve(input) {
    let text = input.join("");
    let regex = /([:*])\1(?<ASCII>[A-Z][a-z]{2,})\1\1/g;
    let coolTreshold = 1;
    for (let i = 0; i < text.length; i++) {
        if (Number(text[i]) > 0) coolTreshold *= Number(text[i]);
    }
    if (text.includes("0")) coolTreshold = 0;
    console.log(`Cool threshold: ${coolTreshold}`);
    let match = regex.exec(text);
    let emojisFound = 0;
    let coolEmojis = [];
    while (match != null) {
        emojisFound++;
        let temp = match[2];
        let value = 0;
        for (let i = 0; i < temp.length; i++) {
            value += temp.charCodeAt(i);
        }
        if (value >= coolTreshold) coolEmojis.push(match[0]);
        match = regex.exec(text);
    }
    console.log(`${emojisFound} emojis found in the text. The cool ones are:`);
    for (let each of coolEmojis) {
        console.log(each);
    }
}


solve([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
])

solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
])