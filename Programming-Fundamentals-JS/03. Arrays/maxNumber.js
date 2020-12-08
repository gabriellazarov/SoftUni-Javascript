function findmax(arr) {
    let br;
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        br = false;
        for (j = i + 1; j < arr.length; j++) {
            if (Number(arr[i]) <= Number(arr[j])) {
                br = true;
                break;
            }
        }
        if (br == false) result += arr[i] + ' ';
    }
    console.log(result);
}
findmax([14, 24, 3, 19, 15, 17]);