function solve(input) {
    let info = input.map(a => a.split(' > '));
    let orders = {};
    for (let order of info) {
        if (orders.hasOwnProperty(order[0])) {
            if (Object.keys(orders[order[0]]).includes(order[1])) {
                if (orders[order[0]][order[1]] > order[2]) {
                    orders[order[0]][order[1]] = order[2]
                }
            } else {
                orders[order[0]][order[1]] = order[2];
            }
        } else {
            orders[order[0]] = {};
            orders[order[0]][order[1]] = order[2];
        }
    }
    let output = Object.entries(orders).sort((a, b) => a[0].localeCompare(b[0]));
    for (let each of output) {
        each[1] = Object.entries(each[1]);
        each[1].sort((a, b) => a[1] - b[1]);
        each[1].map(a => a.splice(1, 0, " -> "));
        let result = "";
        for (let el of each[1]) {
            result += el.join('')+' ';
        }
        console.log(`${each[0]} -> ${result}`)
    }
}

solve([
    "Bulgaria > Sofia > 5000",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 2000"
])