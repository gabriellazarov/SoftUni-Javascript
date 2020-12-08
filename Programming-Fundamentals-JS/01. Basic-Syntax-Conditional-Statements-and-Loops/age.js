function age(arr) {
    let current = Number(arr);
    if (current >= 0 && current <= 2) console.log('baby');
    else if (current >= 3 && current <= 13) console.log('child');
    else if (current >= 14 && current <= 19) console.log('teenager');
    else if (current >= 20 && current <= 65) console.log('adult');
    else if (current >= 66) console.log('elder');
    else console.log('out of bounds');
}
age(1);