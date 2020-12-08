function sorting(arr) {
    let arr1 = arr;
    arr1.sort((a, b) => b - a);
    let arr2 = arr1.splice(Math.ceil(arr1.length / 2))
    arr2.sort((a, b) => a - b);
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i]);
        arr3.push(arr2[i]);
    }
    if (arr3.length % 2 != 0) { arr3.pop(); }
    console.log(arr3.join(' '))

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])