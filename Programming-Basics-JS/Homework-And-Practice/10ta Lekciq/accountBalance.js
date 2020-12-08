function balance(input) {
    let amount = input[0];
    let index = 1;
    let total = 0;
    while (index <= amount) {
        let money = Number(input[index]);
        if (money < 0) {
            console.log("Invalid operation!");
            break;
        } else {
            console.log("Increase: " + money.toFixed(2));
            total += money;
            index++;
            money = input[index];
        }
    }
    console.log(`Total: ${total.toFixed(2)}`)
}
balance([`3`, `5.51`, `69.42`, 100])