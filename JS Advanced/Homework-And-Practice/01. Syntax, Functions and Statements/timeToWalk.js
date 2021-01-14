function solve(a, b, c) {
    let steps = a;
    let footPrint = b;
    let speed = (c * 1000) / 3600;
    let distance = steps * footPrint;
    let time = distance / speed + Math.floor(distance / 500) * 60;
    let seconds = (time % 60).toFixed(0);
    let minutes = ((time-seconds)/60%60).toFixed(0);
    let hours = ((time - seconds - minutes*60)/3600).toFixed(0);
     if (hours == 0) hours = "00";
     if (minutes == 0) minutes = "00";
     if (seconds == 0) seconds = "00";
     console.log(`${hours}:${minutes}:${seconds}`);
}
solve(2564, 0.70, 5.5)