function pass(input) {
    let username = input[0];
    let password = input[1];
    let index = 2;
    let userInput = input[index];
    while (userInput != password) {
        index++;
        userInput = input[index];
    }
    console.log(`Welcome ${username}!`)
}