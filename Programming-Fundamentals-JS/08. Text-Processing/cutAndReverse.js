function solve(input) {
    let string1 = input.split('');
    let temp1 = [];
    while (string1[0] != undefined) {
        temp1.push(string1.pop())
    }
    console.log(temp1.slice(temp1.length/2).join(""));
    console.log(temp1.slice(0,temp1.length/2).join(""));
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')