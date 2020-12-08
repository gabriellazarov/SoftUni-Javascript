function solve(input) {
    let index = 0;
    let currentDeliteli;
    let sumPrime = 0;
    let sumNonPrime = 0;
    while (input[index] !== "stop") {
        currentDeliteli = 0;
        if (Number(input[index]) < 0) {
            console.log("Number is negative.");
        } else {
            for (let i = Number(input[index]) - 1; i > 1; i--) {

                if (Number(input[index]) % i === 0) {
                    currentDeliteli++;
                    break;
                }
            }
            if (currentDeliteli > 0) sumNonPrime += Number(input[index]);
            else sumPrime += Number(input[index]);
        }
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
solve()