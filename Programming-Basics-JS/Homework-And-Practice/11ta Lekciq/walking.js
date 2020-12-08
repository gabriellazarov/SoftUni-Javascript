function walking(input) {
    let index = 0;
    let sum = 0;
    let isHome = false;
    let current = input[index];
    while (index < input.length) {
        if (isHome === true) {
            if (Number(current) + sum >= 10000) {
                console.log("Goal reached! Good job!");
                break;
            } else {
                console.log(`${10000 - sum - Number(input[index])} more steps to reach goal.`);
                break;
            }
        }
        if (current === "Going home") {
            isHome = true;
            index++;
            current = Number(input[index]);
        } else {
            if (sum + Number(current) >= 10000) {
                console.log("Goal reached! Good job!");
                break;
            } else {
                sum += Number(current);
                index++;
                current = input[index];
            }
        }
    }
}
walking(['1000',
    '1500',
    'Going home',
    '6500'])