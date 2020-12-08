function solve(input) {
    let totalTickets = 0;
    let studentTickets = 0;
    let standartTickets = 0;
    let kidTickets = 0;
    let currentTitle;
    let currentTickets;
    let brTickets;
    let index = 0;
    while (input[index] != "Finish") {
        brTickets = 0;
        currentTitle = input[index];
        index++;
        currentTickets = input[index];
        index++;
        for (let i = 0; i < currentTickets; i++) {
            if (input[index] == "student") {
                studentTickets++;
            } else if (input[index] == "standard") {
                standartTickets++;
            } else {
                kidTickets++;
            }
            brTickets++;
            index++;
            if (input[index] === "Finish" || input[index] === "End") {
                break;
            }
        }
        console.log(`${currentTitle} - ${((100 * brTickets) / currentTickets).toFixed(2)}% full.`)
        totalTickets += brTickets;
        if (input[index] == "Finish") break;
        else if (input[index] === "End") index++;
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((studentTickets / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standartTickets / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}
solve([
    'The Matrix', '20',
    'student', 'standard',
    'kid', 'kid',
    'student', 'student',
    'standard', 'student',
    'End', 'The Green Mile',
    '17', 'student',
    'standard', 'standard',
    'student', 'standard',
    'student', 'End',
    'Amadeus', '3',
    'standard', 'standard',
    'standard', 'Finish'
]
)