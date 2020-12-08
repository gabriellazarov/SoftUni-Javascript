function solve(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let filled = 0;
    let isThird = 0;
    let br = 0;
    while (input[index] !== "End" && filled < capacity) {
        isThird++;
        if (isThird % 3 == 0) {
            filled += 1.1 * Number(input[index]);
        } else filled += Number(input[index]);
        br++;
        index++;
    }
    if (input[index] === "End") {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${br} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${br - 1} suitcases loaded.`);
    }
}