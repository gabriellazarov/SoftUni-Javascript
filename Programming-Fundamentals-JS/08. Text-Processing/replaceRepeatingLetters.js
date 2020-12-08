function solve(input) {
    let myString = input.split("");
    for (let i = 0; i < myString.length; i++) {
        while (myString[i + 1] == myString[i]) {
            myString.splice(i + 1, 1);
        }
    }
    console.log(myString.join(""))
}
solve('aaaaabbbbbcdddeeeedssaa')