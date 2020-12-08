function solve(input) {
    let data = input.map(a => a.split(' -> '));
    let companies = {};
    for (let employee of data) {
        if (companies.hasOwnProperty(employee[0])) {
            if (companies[employee[0]].includes(employee[1]) == false) {
                companies[employee[0]].push(employee[1]);
            }
        } else {
            companies[employee[0]] = [];
            companies[employee[0]].push(employee[1]);
        }
    }
    let output = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));
    for (company of output) {
        console.log(company[0]);
        for (each of company[1]) {
            console.log(`-- ${each}`);
        }
    }
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])