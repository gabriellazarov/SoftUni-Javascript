function sorting(arr) {
    function criteria(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            let n =a.localeCompare(b);
            return n;
        }
    }
    arr.sort(criteria)
    console.log(arr.join('\n'))
}

sorting(['alpha',
    'beta',
    'gamma'])
sorting(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'Aarrison',
    'George'])