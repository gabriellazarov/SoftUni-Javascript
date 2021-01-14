function solve(int) {
    int = String(int);
    let compare = int[0];
    let br = 1;
    let sum = Number(int[0]);
    for (let i = 1; i < int.length; i++) {
        if (int[i] != compare) {
            br = 0;
        }
        sum += Number(int[i]);
    }
    if (br) {
        console.log("true");
        console.log(sum);
    } else {
        console.log("false");
        console.log(sum);
    }
}
solve(2222222)