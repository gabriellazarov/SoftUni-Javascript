function flow(num) {
    let br = 0;
    let sum = 0;
    for (let i = num; i >= 100; i -= 10) {
        br++;
        sum += i - 26;
        if (sum < 0) sum = 0;
    }
    sum -= 26;
    if (sum < 0) sum = 0;
    console.log(br);
    console.log(sum);
}
flow(111)