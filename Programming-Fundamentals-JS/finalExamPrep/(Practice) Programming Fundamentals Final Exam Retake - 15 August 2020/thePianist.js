function solve(input) {
    let n = input.shift();
    let pieces = [];
    for (let i = 0; i < n; i++) {
        pieces[i] = input.shift().split("|");
    }
    let commands = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "Stop") break;
        else commands[i] = input[i].split('|');
    }
    for (let i = 0; i < commands.length; i++) {
        let index = -1;
        for (let j = 0; j < pieces.length; j++) {
            if (commands[i][1] == pieces[j][0]) {
                index = j;
                break;
            }
        }
        if (commands[i][0] == "Add") {
            if (index >= 0) {
                console.log(`${commands[i][1]} is already in the collection!`)
            } else {
                pieces.push([commands[i][1], commands[i][2], commands[i][3]]);
                console.log(`${commands[i][1]} by ${commands[i][2]} in ${commands[i][3]} added to the collection!`);
            }
        } else if (commands[i][0] == "Remove") {
            if (index >= 0) {
                pieces.splice(index, 1);
                console.log(`Successfully removed ${commands[i][1]}!`);
            } else console.log(`Invalid operation! ${commands[i][1]} does not exist in the collection.`);
        } else {
            if (index >= 0) {
                pieces[index][2] = commands[i][2];
                console.log(`Changed the key of ${commands[i][1]} to ${commands[i][2]}!`)
            } else console.log(`Invalid operation! ${commands[i][1]} does not exist in the collection.`);
        }
    }
    pieces.sort((a, b) => a[0].localeCompare(b[0]))
    for (let i = 0; i < pieces.length; i++) {
        console.log(`${pieces[i][0]} -> Composer: ${pieces[i][1]}, Key: ${pieces[i][2]}`);
    }
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);