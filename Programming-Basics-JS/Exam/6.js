function solve(input) {
    let index = 0;
    let name;
    let score;
    while (input[index] !== "Midnight") {
        name = input[index];
        score = 0;
        index++;
        if (Number(input[index]) >= 0) {
            score += Number(input[index]);
            index++;
            if (Number(input[index]) >= 0) {
                score += Number(input[index]);
                index++;
                if (Number(input[index]) >= 0) {
                    score += Number(input[index]);
                    index++;
                    if (Number(input[index]) >= 0) {
                        score += Number(input[index]);
                        index++;
                        if (Number(input[index]) >= 0) {
                            score += Number(input[index]);
                            index++;
                            if (Number(input[index]) >= 0) {
                                score += Number(input[index]);
                                index++;
                                score = Math.floor(score / 6) * 0.06;
                                if (score < 3) score = 2;
                                if (score >= 5) {
                                    console.log("===================");
                                    console.log("|   CERTIFICATE   |");
                                    console.log(`|    ${score.toFixed(2)}/6.00    |`);
                                    console.log("===================");
                                    console.log(`Issued to ${name}`);
                                } else console.log(`${name} - ${score.toFixed(2)}`);
                            }
                            else { console.log(`${name} was cheating!`); index++; }
                        }
                        else { console.log(`${name} was cheating!`); index++; }
                    }
                    else { console.log(`${name} was cheating!`); index++; }
                }
                else { console.log(`${name} was cheating!`); index++; }
            }
            else { console.log(`${name} was cheating!`); index++; }
        }
        else { console.log(`${name} was cheating!`); index++; }
    }
}
solve(['George', '100', '100',
    '100', '100', '40',
    '0', 'John', '10',
    '-1', 'Peter', '100',
    '100', '100', '100',
    '100', '70', 'Midnight'])