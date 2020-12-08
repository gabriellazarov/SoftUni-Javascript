function solve(a, b, c) {
    let difficulty = a;
    let loopty = b;
    let pages = c;
    if (difficulty >= 80 && loopty >= 80 && pages >= 8) console.log("Legacy");
    else if (difficulty >= 80 && loopty <= 10) console.log("Master");
    else if (loopty >= 50 && pages >= 2) console.log("Hard");
    else if (difficulty <= 10) console.log("Elementary");
    else if (difficulty <= 30 && pages <= 1) console.log("Easy");
    else console.log("Regular");

}
solve(80, 40, 3)