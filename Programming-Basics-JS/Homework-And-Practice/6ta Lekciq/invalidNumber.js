function invalidNumber(arg) {
    let number = Number(arg);
    if (number === 0) console.log("");
    else if (number < 100 || number > 200) console.log("invalid");
}