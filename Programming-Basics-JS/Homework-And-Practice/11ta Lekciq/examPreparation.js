function examPrep(input) {
    let badGradesAllowed = input[0];
    let badGrades = 0;
    let index1 = 1;
    let index2 = 2;
    let current1 = input[index1];
    let current2 = Number(input[index2]);
    let sum = current2;
    let br = 1;
    while (index1 <= input.length) {
        if (current2 <= 4) badGrades++;
        if (badGrades >= badGradesAllowed) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        } else {

            index1 += 2;
            if (input[index1] === "Enough") {
                console.log(`Average score: ${(sum / br).toFixed(2)}`)
                console.log(`Number of problems: ${br}`)
                console.log(`Last problem: ${current1}`)
                break;
            }
            current1 = input[index1];
            index2 += 2;
            current2 = Number(input[index2]);
            sum += current2;
            br++;
        }
    }
}