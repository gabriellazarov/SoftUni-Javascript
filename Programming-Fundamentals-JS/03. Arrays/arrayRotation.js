function rotate(arr, n) {
    let lng = arr.length;
    for (let i = 0; i < n; i++) {
        arr.push(arr[0]);
        for (let j = 0; j <= arr.length - 1; j++) {
            a = arr[j] = arr[j + 1];
        }
        arr.length = lng;
    }
    console.log(arr.join(' '));
}

rotate([51, 47, 32, 61, 21], 2);