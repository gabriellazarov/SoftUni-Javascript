function solve(input, arg, barg) {
    let zadacha = input;
    let points = arg;
    let course = barg;
    let pointz;
    if (zadacha == 1) {
        if (course === "Basics") pointz = points * 0.08 * 0.8;
        else if (course === "Fundamentals") pointz = points * 0.11;
        else pointz = points * 0.14 * 1.2;
    } else if (zadacha == 2) {
        if (course === "Basics") pointz = points * 0.09;
        else if (course === "Fundamentals") pointz = points * 0.11;
        else pointz = points * 0.14 * 1.2;
    } else if (zadacha == 3) {
        if (course === "Basics") pointz = points * 0.09;
        else if (course === "Fundamentals") pointz = points * 0.12;
        else pointz = points * 0.15 * 1.2;
    } else {
        if (course === "Basics") pointz = points * 0.10;
        else if (course === "Fundamentals") pointz = points * 0.13;
        else pointz = points * 0.16 * 1.2;
    }
    console.log(`Total points: ${pointz.toFixed(2)}`)
}
solve(1, 100, "Basics")