function solve(input) {
    let sum = 0;
    let flag = 1;
    for (let i = 0; i < input[0].length; i++) {
        sum += input[0][i];
    }
    for (let i = 1; i < input[0].length; i++) {
        let tempSum = 0;
        for (let j = 0; j < input[0].length; j++) {
            tempSum += input[i][j];
        }
        if (tempSum != sum) {
            flag = 0;
            break;
        }
    }
    if (flag) {
        for (let j = 0; j < input[0].length; j++) {
            let tempSum = 0;
            for (let i = 0; i < input[0].length; i++) {
                tempSum += input[i][j];
            }
            if (tempSum != sum) {
                flag = 0;
                break;
            }
        }
        if (flag) console.log("true");
        else console.log("false");
    }
    else (console.log("false"));
}

solve(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)