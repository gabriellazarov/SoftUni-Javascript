function purpleLibRight(arg) {
    let n = Number(arg);
    let br = 0;
    for (let i = 1; i <= n; i++) {
        br += i * i;
    }
    console.log(br);
}