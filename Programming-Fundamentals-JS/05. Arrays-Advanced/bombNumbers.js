function bombNumbers(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == arr2[0]) {
            let start = i - arr2[1];
            if (start < 0) start = 0;
            arr1.splice(start, arr2[1] * 2 + 1);
            i = 0;
        }
    }
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    console.log(sum);
}


bombNumbers([1, 2, 2, 4, 2, 2,
    2, 9],
    [4, 2])
bombNumbers([1, 4, 4, 2, 8, 9,
    1],
    [9, 3])
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1])