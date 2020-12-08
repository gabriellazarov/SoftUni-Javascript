function solve(input) {
    let points = Number(input[0]);
    let section = '';
    let sectionPoints = '';
    let br = 0;
    let index = 0;
    while (points > 0) {
        br++;
        index++;
        section = input[index];
        index++;
        sectionPoints = input[index];
        if (section == "bullseye") break;
        else if (section == "number section") {
            points -= sectionPoints;
        } else if (section == "double ring") {
            points -= sectionPoints * 2;
        } else if (section == "triple ring") {
            points -= sectionPoints * 3;
        }
    }
    if (section == "bullseye") console.log(`Congratulations! You won the game with a bullseye in ${br} moves!`);
    else if (points === 0) console.log(`Congratulations! You won the game in ${br} moves!`);
    else console.log(`Sorry, you lost. Score difference: ${points * (-1)}.`);
}


solve([
    '150',
    'double ring',
    '20',
    'triple ring',
    '10',
    'number section',
    '20',
    'triple ring',
    '20'])