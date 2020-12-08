function solve(input) {
    let name = input[0];
    let playedGames = Number(input[1]);
    let index = 1;
    let gameName ;
    let gamePoints;
    let volleyballMatches = 0;
    let volleyballPoints = 0;
    let tennisMatches = 0;
    let tennisPoints = 0;
    let badmintonMatches = 0;
    let badmintonPoints = 0;
    let totalPoints = 0;
    for (let i = 0; i < playedGames; i++) {
        index++;
        gameName = input[index];
        index++;
        gamePoints = Number(input[index]);
        if (gameName == "volleyball") {
            volleyballMatches++;
            volleyballPoints += gamePoints * 1.07;
            totalPoints += gamePoints * 1.07;
        } else if (gameName == "tennis") {
            tennisMatches++;
            tennisPoints += gamePoints * 1.05;
            totalPoints += gamePoints * 1.05;
        } else {
            badmintonMatches++;
            badmintonPoints += gamePoints * 1.02;
            totalPoints += gamePoints * 1.02;
        }
    }
    if (volleyballPoints / volleyballMatches >= 75 && tennisPoints / tennisMatches >= 75 && badmintonPoints / badmintonMatches >= 75) console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(totalPoints)} points.`);
    else console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalPoints)}.`)
}