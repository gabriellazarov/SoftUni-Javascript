function operations(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;
    let evenOrOdd = "";
    switch (operator) {
        case "+": {
            if ((n1 + n2) % 2 == 0) evenOrOdd = "even";
            else evenOrOdd = "odd";
            console.log(`${n1} + ${n2} = ${n1 + n2} - ${evenOrOdd}`);
            break;
        }
        case "-": {
            if ((n1 - n2) % 2 == 0) evenOrOdd = "even";
            else evenOrOdd = "odd";
            console.log(`${n1} - ${n2} = ${n1 - n2} - ${evenOrOdd}`);
            break;
        }
        case "*": {
            if ((n1 * n2) % 2 == 0) evenOrOdd = "even";
            else evenOrOdd = "odd";
            console.log(`${n1} * ${n2} = ${n1 * n2} - ${evenOrOdd}`);
            break;
        }
        case "/": {
            if (n2 === 0) console.log(`Cannot divide ${n1} by zero`)
            else console.log(`${n1} / ${n2} = ${(n1 / n2).toFixed(2)}`)
            break;
        }
        case "%": {
            if (n2 === 0) console.log(`Cannot divide ${n1} by zero`)
            else console.log(`${n1} % ${n2} = ${n1 % n2}`)
            break;
        }
    }
}