function solve(input) {
    let br = 1;
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "add") {
            arr.push(br);
        } else {
            arr.pop();
        }
        br++;
    }
    if (arr[0] != undefined) {
        for (let el of arr) {
            console.log(el);
        }
    }else console.log ("Empty")
}


solve(['add',
    'add',
    'remove',
    'remove',
    'remove'])