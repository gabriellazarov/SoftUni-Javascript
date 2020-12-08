function sum(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let magicNumber = Number(input[2]);
    let flag = false;
    let br = 0;
    let pseudoj;
    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            br++;
            if (i + j === magicNumber) {
                flag = true;
                pseudoj = j;
                break;
            }
        }
        if (flag) {
            console.log(`Combination N:${br} (${i} + ${pseudoj} = ${i + pseudoj})`)
            break;
        }
    }
    if (flag === false) console.log(`${br} combinations - neither equals ${magicNumber}`);
}
sum([`88`, `888`, `1000`])