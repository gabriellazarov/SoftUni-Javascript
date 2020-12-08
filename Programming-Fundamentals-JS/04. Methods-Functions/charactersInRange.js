function inRange(char1, char2) {
    let start;
    let finish;
    let a = String(char1);
    let b = String(char2);
    let char1ASCII = a.charCodeAt(0);
    let char2ASCII = b.charCodeAt(0);
    if (char1ASCII < char2ASCII) {
        start = char1ASCII;
        finish = char2ASCII;
    } else {
        start = char2ASCII;
        finish = char1ASCII;
    }
    let result = '';
    for (let i = start + 1; i < finish; i++) {
        result += String.fromCharCode(i) + ' ';
    }
    console.log(result);
}
inRange('a', 'f')