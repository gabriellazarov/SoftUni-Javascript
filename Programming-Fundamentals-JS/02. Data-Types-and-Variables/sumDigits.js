function sumDigits(num) {
    let sum = 0;
    let number = String(num);
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    console.log(sum);
}
sumDigits(245678)