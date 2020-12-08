function solve(input) {
    let n = Number(input[0]);
    let magic = '';
    for (let i = 1; i <= 9; i++) {
        if (n % i == 0) {
            for (let j = 1; j <= 9; j++) {
                if (n % j == 0) {
                    for (let k = 1; k <= 9; k++) {
                        if (n % k == 0) {
                            for (let l = 1; l <= 9; l++) {
                                if (n % l == 0) magic += `${i}${j}${k}${l} `
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(magic)
}
solve([3])