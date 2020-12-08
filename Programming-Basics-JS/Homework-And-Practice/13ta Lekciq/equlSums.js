function solve(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let currentOdd;
    let currentEven;
    let current = '';
    for (let i = start; i <= finish; i++) {
        currentEven = 0;
        currentOdd = 0;
        currentEven += (i % 10 + Math.floor(i / 100) % 10 + Math.floor(i / 10000) % 10);
        currentOdd += (Math.floor(i / 10) % 10 + Math.floor(i / 1000) % 10 + Math.floor(i / 100000) % 10);
        if (currentEven === currentOdd) current += `${i} `;
    }
    console.log(current)
}
solve([123456, 124000])