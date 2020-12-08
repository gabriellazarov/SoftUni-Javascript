function train(arr) {
    let wagons = arr[0];
    let current = '';
    let result = [];
    for (let j = 0; j < wagons.length; j++) {
        if (wagons[j] === ' ' || j == wagons.length - 1) {
            if (j == wagons.length - 1) {
                current += wagons[wagons.length - 1];
            }
            result.push(Number(current));
            current = '';
        } else {
            current += wagons[j];
        }
    }
    let max = arr[1];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i].includes("Add")) {
            let num = Number(arr[i].slice(4));
            result.push(num);
        } else {
            float = Number(arr[i]);
            for (let j = 0; j < result.length; j++) {
                if ((float + result[j]) <= max) {
                    result[j] += float;
                    break;
                }
            }
        }
    }
    console.log(result.join(' '))
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])