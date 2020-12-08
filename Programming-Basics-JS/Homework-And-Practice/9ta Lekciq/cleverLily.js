function lily(arg1, arg2, arg3) {
    let age = Number(arg1);
    let costWasingMachine = Number(arg2);
    let costToy = Number(arg3);
    let savedUp = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedUp += i * 5 - 1;
        } else savedUp += costToy;
    }
    if (savedUp >= costWasingMachine) console.log(`Yes! ${(savedUp - costWasingMachine).toFixed(2)}`);
    else console.log(`No! ${(costWasingMachine - savedUp).toFixed(2)}`);
}
lily(10, 170, 6);