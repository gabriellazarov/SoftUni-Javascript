function sum(arg1, arg2, arg3) {
    let text = String(arg1);
    let multiplier = Number(arg2);
    let budget = Number(arg3);
    let br = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u" || text[i] == "y") br += 3;
        else br++;
    }
    if (br * multiplier <= budget) console.log(`${text} bought. Money left: ${(budget - br * multiplier).toFixed(2)}`);
    else console.log(`Cannot buy ${text}. Product value: ${(br * multiplier).toFixed(2)}`)
}
sum('apple', 2, 20);