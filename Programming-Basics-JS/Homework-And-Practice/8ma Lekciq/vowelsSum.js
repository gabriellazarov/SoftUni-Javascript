function sum(arg) {
    let text = String(arg);
    let br = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a") br++;
        else if (text[i] == "e") br += 2;
        else if (text[i] == "i") br += 3;
        else if (text[i] == "o") br += 4;
        else if (text[i] == "u") br += 5;
    }
    console.log(br);
}
sum('hello');