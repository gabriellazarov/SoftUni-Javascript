function solve(a, b) {
    let students = a;
    let seasons = b;
    for (let i = 1; i <= seasons; i++) {
        students = Math.ceil(students * 90 / 100);
        students = Math.ceil(students * 90 / 100);
        students = Math.ceil(students * 80 / 100);
        if (i % 3 == 0) students = Math.ceil(students * 115 / 100);
        else students = Math.ceil(students * 105 / 100);
    }
    console.log(`Students: ${students}`)
}
solve(2000, 5)