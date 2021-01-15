function solve(x1, y1, x2, y2) {
    if (x1 == 0) {
        if (y1 % 1 == 0) console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else if (y1 == 0) {
        if (x1 % 1 == 0) console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else {
        if (Math.sqrt(Math.pow(Math.abs(x1), 2) + Math.pow(y1, 2)) % 1 == 0) {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        } else console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (x2==0) {
        if (y2 % 1 == 0) console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else if (y2==0) {
        if (x2 % 1 == 0) console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else {
        if (Math.sqrt(Math.pow(Math.abs(x2), 2) + Math.pow(y2, 2)) % 1 == 0) {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (x1 == x2) {
        if ((y1 - y2) % 1 == 0) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else if (y1 == y2) {
        if ((x1 - x2) % 1 == 0) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else {
        if (Math.sqrt(Math.pow(Math.abs(x1) + Math.abs(x2), 2) + Math.pow(y1 - y2, 2)) % 1 == 0) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve(3, 0, 0, 4);