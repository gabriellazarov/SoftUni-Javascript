function solve(input) {
    let myArr = input.split('');
    for (let i = 1; i < myArr.length; i++) {
        if (myArr[i] != myArr[i].toLowerCase()) {
            myArr.splice(i, 0, '|');
            i++;
        }
    }
    let answer = myArr.join('').split('|').join(', ');
    console.log(answer)
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')