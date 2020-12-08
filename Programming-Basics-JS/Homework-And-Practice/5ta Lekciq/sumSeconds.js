function fun(time1, time2, time3) {
    let time = Number(time1) + Number(time2) + Number(time3);
    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;
    if (seconds >= 10) {
        console.log(`${minutes}:${seconds}`);
    }
    else console.log(`${minutes}:0${seconds}`);
}
fun(35, 45, 44)