function fun(arg1, arg2, arg3) {
    let recordTime = Number(arg1);
    let distance = Number(arg2);
    let ivanSpeed = Number(arg3);
    let ivanTime = distance * ivanSpeed + Math.floor(distance / 15) * 12.5;
    if (ivanTime < recordTime) {
        console.log(`Yes, he succeeded! The new world record is ${ivanTime.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No, he failed! He was ${(ivanTime - recordTime).toFixed(2)} seconds slower.`)
    }
}
fun(10464, 1500, 20)