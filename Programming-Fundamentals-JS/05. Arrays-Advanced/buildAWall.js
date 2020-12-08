function build(arr) {
    arr.map(x => Number(x));
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    let br;
    let total = 0;
    let concrete = '';
    for (let i = 0; i < 30 - min; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] == 30) {
                arr.splice(arr.indexOf(arr[j]), 1);
            }
        }
        br = 0;
        for (let j = 0; j < arr.length; j++) {
            arr[j]++;
            br++;
            total++;
        }
        concrete += ", " + br * 195;
    }
    let answer = concrete.split(", ");
    answer.shift();
    console.log(answer.join(", "))
    console.log(total * 195 * 1900 + ' pesos');
}


build([21, 25, 28]);
build([17]);
build([17, 22, 17, 19, 17]);