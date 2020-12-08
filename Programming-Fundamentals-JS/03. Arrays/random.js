function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let a = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = a;
    }
    console.log(arr.join(" "));
}
reverse(['a', 'b', 'c', 'd', 'e']);