function solve(input) {
    let result = [];
    input = input.sort((a, b) => a.localeCompare(b))
    let initial = input[0][0];
    console.log(initial);
    for (let product of input) {
        result.push(product.split(' : '))
    }
    for (let product of result) {
        if (product[0][0] != initial) {
            initial = product[0][0];    
            console.log(initial);
        }
        console.log(product.join(': '));
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])