function maxx(arr) {
    let result = [];
    let br;
    let current;
    let best = 0;
    for (let i = 0; i < arr.length; i++) {
        br = 0;
        current = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                br++;
                current.push(arr[i]);
            } else break;
        }
        if (br > best) {
            best = br;
            result = current;
        }
    }
    console.log(result.join(' '));
}
maxx([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxx([1, 1, 1, 2, 3, 1, 3, 3]);
maxx([4, 4, 4, 4]);
maxx([0, 1, 1, 5, 2, 2, 6, 3, 3]);