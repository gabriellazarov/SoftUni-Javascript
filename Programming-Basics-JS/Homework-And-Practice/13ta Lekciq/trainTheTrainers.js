function solve(input) {
    let index = 0;
    let juryPeople = Number(input[index]);
    index++;
    let currentProject = '';
    let currentScores = 0;
    let totalScores = 0;
    let br = 0;
    while (input[index] !== "Finish") {
        currentScores = 0;
        currentProject = input[index];
        index++;
        for (let i = 1; i <= juryPeople; i++) {
            currentScores += Number(input[index]);
            index++;
            br++;
        }
        totalScores += currentScores;
        console.log(`${currentProject} - ${(currentScores / juryPeople).toFixed(2)}.`)
    }
    console.log(`Student's final assessment is ${(totalScores / br).toFixed(2)}.`)
}
solve([
    '2', 'While-Loop',
    '6.00', '5.50',
    'For-Loop', '5.84',
    '5.66', 'Finish'
])