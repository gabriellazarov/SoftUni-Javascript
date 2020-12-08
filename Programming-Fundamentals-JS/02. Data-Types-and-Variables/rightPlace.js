function rightPlace(a, b, c) {
    let firstString = a;
    let secondString = c;
    let symbol = b;
    let place;
    for (let i = 0; i < firstString.length; i++) {
        if (firstString[i] == "_") {
            place = i;
            break;
        }
    }
    if (secondString[place] === symbol) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace("Str_ng", "o", "Strong")