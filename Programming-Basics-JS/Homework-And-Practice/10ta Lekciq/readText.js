function lol(input) {
    let index = 0;
    let text = input[index];
    while (text != "Stop") {
        index++;
        text = input[index];
    }
    console.log(index);
}
lol(['nakov', 'Stop'])
