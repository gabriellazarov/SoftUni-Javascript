function purpleLibRight(arg1, arg2, arg3) {
    let start = Number(arg1);
    let end = Number(arg2);
    let divider = Number(arg3);
    let br = 0;
    for (let i = start; i <= end; i++) {
        if (i % divider === 0) br += i;
    }
    console.log(br);
}
purpleLibRight(10,30,7)