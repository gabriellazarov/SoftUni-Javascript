function solve(input) {
    let easierArr = input.map(a => a.split(', '))
    let parking = {};
    for (let action of easierArr) {
        if (parking[action[1]] == "IN") {
            delete parking[action[1]];
        } else if (action[0] == "IN") {
            parking[action[1]] = action[0];
        }
    }
    let output = Object.keys(parking);
    if (output[0] == undefined) {
        console.log("Parking Lot is Empty")
    } else {
        output.sort((a, b) => {
            let tempNumberA = a.split("");
            tempNumberA = tempNumberA.filter(a => a>-1).join('');
            let tempNumberB = b.split("");
            tempNumberB = tempNumberB.filter(a => a>-1).join('');
            return Number(tempNumberA) - Number(tempNumberB);
        });
        for (let plate of output) {
            console.log(plate);
        }
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)
solve(['IN, C2844AA',
    'IN, CA1234TA',
    'OUT, C2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, C2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])