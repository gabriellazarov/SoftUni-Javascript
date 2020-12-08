function solve(arr) {
    let employees = {};
    for (const name of arr) {
        employees[name] = name.length;
        console.log(`Name: ${name} -- Personal Number: ${name.length}`)
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])