function time(arg1, arg2) {
    let hours = Number(arg1);
    let minutes = Number(arg2);
    let totalMinutes = hours * 60 + minutes + 15;
    hours = Math.floor(totalMinutes / 60);
    if (hours > 23) hours = hours - 24;
    minutes = totalMinutes % 60;
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    }
    else console.log(`${hours}:${minutes}`);
}