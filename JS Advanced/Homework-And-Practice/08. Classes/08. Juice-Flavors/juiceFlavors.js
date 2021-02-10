function solve(input) {
    let juice = {};
    let bottles = {};

    for (let el of input) {
        let current = el.split(' => ');
        if (juice[current[0]] == undefined) {
            juice[current[0]] = 0;
        }
        juice[current[0]] += Number(current[1]);
        if (juice[current[0]] >= 1000) {
            let quantity = Math.floor(juice[current[0]] / 1000);
            if (bottles[current[0]] == undefined) {
                bottles[current[0]] = 0;
            }
            bottles[current[0]] += quantity;
            juice[current[0]] -= quantity * 1000;
        }
    }
    Object.entries(bottles).forEach(a => console.log(`${a[0]} => ${a[1]}`));
}


solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
)