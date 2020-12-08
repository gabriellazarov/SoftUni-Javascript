function search(arr1, arr2) {
    let result = arr1.slice(0, arr2[0]);
    result.splice(0, arr2[1]);
    let br = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == arr2[2]) br++;
    }
    console.log(`Number ${arr2[2]} occurs ${br} times.`)
}
search([5, 2, 3, 4, 1, 6],
    [5, 2, 3])