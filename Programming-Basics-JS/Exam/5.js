function solve(a, b, c) {
    let students = Number(a);
    let problems = Number(b);
    let trainerEnergy = Number(c);
    let br = 0;
    let questions = 0;
    while (trainerEnergy > 0) {
        br++;
        trainerEnergy += problems * 2;
        students -= problems;
        questions += students * 2;
        trainerEnergy -= students * 6;
        if (trainerEnergy <= 0) break;
        else if (students < 10) break;
        else students += Math.floor(students / 10);
    }
    if (trainerEnergy > 0) {
        console.log("The students are too few!");
        console.log(`Problems solved: ${br * problems}`);
    }
    else {
        console.log("The trainer is too tired!");
        console.log(`Questions asked: ${questions}`);
    }
}
solve(20, 1, 100)