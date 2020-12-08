function score(arg) {
    let number = Number(arg);
    let bp = 0;
    if (number <= 100) {
        bp = bp + 5;
    }
    else if (number > 1000) {
        bp = bp + number * 0.1
    }
    else if (number > 100) {
        bp = bp + 0.2 * number;
    }
    if (number % 2 == 0) {
        bp = bp + 1;
    }
    if (number % 5 == 0 && number % 2 == 1) {
        bp = bp + 2
    }
    console.log(bp);
    console.log(number + bp);
}
score(20)