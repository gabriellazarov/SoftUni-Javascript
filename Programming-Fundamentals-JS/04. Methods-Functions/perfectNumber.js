function perfectCheck(num) {
    let br = 1;
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i == 0) br += i;
    }
    if (br == num) console.log('We have a perfect number!')
    else console.log("It's not so perfect.")
}