function solve(input) {
    let result = [];
    for (let element of input) {
        let temp = element.split(' / ');
        if (temp[2] != undefined) {
            temp[2] = temp[2].split(', ');
        }else temp[2] = [];
        result.push({ name: temp[0], level: Number(temp[1]), items: temp[2] });
    }
    console.log(JSON.stringify(result))
}

solve(['Isacc / 25 ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])