function sums(arr) {
    if (arr.length == 1) console.log(0);
    else {
        let sum1 = 0;
        let sum2 = 0;
        for (let i = 1; i < arr.length; i++) {
            sum2 += arr[i];
        }
        let flag = 0;
        for (let i = 1; i < arr.length; i++) {
            sum1 += arr[i - 1];
            sum2 -= arr[i];
            if (sum1 == sum2) {
                flag = i;
                break;
            }
        }
        if (flag > 0) {
            console.log(flag);
        } else console.log('no');
    }
}
sums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);