function solve(input) {
    let n = Number(input[0]);
    let l = Number(input[1]);
    let passwords = '';
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            for (let a = 97; a < 97 + l; a++) {
                for (let b = 97; b < 97 + l; b++) {
                    if (i > j) {
                        for (let c = i + 1; c <= n; c++) {
                            passwords+= `${i}${j}${String.fromCharCode(a)}${String.fromCharCode(b)}${c} `;
                        }
                    } else {
                        for (let c = j + 1; c <= n; c++) {
                            passwords+= `${i}${j}${String.fromCharCode(a)}${String.fromCharCode(b)}${c} `;
                        }
                    }
                }
            }
        }
    }
console.log(passwords)
}
solve(['2', '4']);