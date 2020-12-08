function yeet(input) {
    let space = Number(input[0]) * Number(input[1]) * Number(input[2]);
    let spaceFilled = 0;
    let index = 3;
    let current = input[index];
    while (spaceFilled < 100000) {
        if (current === "Done") {
            console.log(`${space - spaceFilled} Cubic meters left.`)
            break;
        } else if (spaceFilled + Number(current) > space) {
            console.log(`No more free space! You need ${spaceFilled + Number(current) - space} Cubic meters more.`);
            break;
        }
        spaceFilled += Number(current);
        index++;
        current = input[index];
    }
}