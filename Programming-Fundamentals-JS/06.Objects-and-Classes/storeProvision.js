function solve(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (i % 2 == 0) {
            if (arr1.includes(arr2[i])) {
                arr1[arr1.indexOf(arr2[i]) + 1] = Number(arr1[arr1.indexOf(arr2[i]) + 1]) + Number(arr2[i + 1]);
                arr2.splice(i, 2);
            }
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    let provisions = {};
    for (let i = 0; i < arr1.length; i+=2) {
        provisions[arr1[i]] = arr1[i+1];
        console.log(arr1[i] + " -> " + arr1[i+1])
    }
}


solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])