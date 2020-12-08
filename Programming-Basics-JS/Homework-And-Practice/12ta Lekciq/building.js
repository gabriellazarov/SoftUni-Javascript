function solve(input) {
    let floors = Number(input[0]);
    let apartmentsPerFloor = Number(input[1]);
    let text;
    for (let i = floors; i >= 1; i--) {
        text = '';
        for (let j = 0; j < apartmentsPerFloor; j++) {
            if (i === floors) {
                text += `L${i}${j} `;
            } else if (i % 2 === 0) {
                text += `O${i}${j} `;
            } else {
                text += `A${i}${j} `;
            }

        }
        console.log(text);
    }
}
solve(['6', '4'])