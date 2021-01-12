function solve(fruit, weight, ppk) {
    console.log(`I need $${(weight / 1000 * ppk).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`);
}
solve('orange', 2500, 1.80)