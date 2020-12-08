function solve(input) {
    let index = 0;
    let numberIndex;
    let i = 0;
    while (input[index] !== "End") {
        numberIndex = index + 1;
        index += 2;
        for (i = 0; i <= Number(input[numberIndex]); i += Number(input[index])) {
            index++;
            if (isNaN(input[index])) break;
        }
        if (i + Number(input[numberIndex + 1]) >= Number(input[numberIndex])) console.log(`Going to ${input[numberIndex - 1]}!`);
    }
}
solve([
    'France', '2000', '300',
    '300', '200', '400',
    '190', '258', '360',
    'Portugal', '1450', '400',
    '400', '200', '300',
    '300', 'Egypt', '1900',
    '1000', '280', '300',
    '500', 'End'
])