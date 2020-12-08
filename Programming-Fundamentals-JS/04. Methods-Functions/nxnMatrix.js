function printMatrix(num) {
    function printLine(num) {
        let line = `${num}`;
        for (let i = 1; i < num; i++) {
            line += ` ${num}`
        }
        console.log(line);
    }
    for (let i = 0; i < num; i++) {
        printLine(num);
    }
}
printMatrix(7)