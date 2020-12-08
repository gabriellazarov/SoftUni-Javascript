function sum(input) {
    let index = 0;
    let br = 0;
    let num = input[index];
    while (num !== "Stop") {
        index++;
        br += Number(num);
        num = input[index];
    }
    console.log(br);
}