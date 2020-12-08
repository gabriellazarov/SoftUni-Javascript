function solve(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let sum of arr) {
        sum1 += Number(sum);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }
    for (let sum of arr) {
        sum2 += Number(sum);
    }
    console.log(arr);
    console.log(sum1);
    console.log(sum2);

}
solve([5, 15, 23, 56, 35]);