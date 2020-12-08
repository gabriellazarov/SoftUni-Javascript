function solve(input) {
    let array = input.split(" ").map(a => a.toLowerCase());
    let words = {};
    let br = 1;
    for (let each of array) {
        each = each.toString();
        if (words.hasOwnProperty(each)) {
            words[each][0]++;
        } else {
            let tempArr = [1, br];
            words[each] = tempArr;
        }
        br++;
    }
    let output = [];
    let arrayed = Object.entries(words);
    arrayed.sort((a,b)=>a[1][1]-b[1][1]);
    for (let [word, occurence] of arrayed) {
        if (occurence[0] % 2 == 1) {
            output.push(word);
        }
    }
    console.log(output.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')