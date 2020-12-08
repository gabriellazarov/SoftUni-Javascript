function fun(arg1, arg2, arg3) {
    let number = Number(arg1);
    let metricInput = arg2;
    let metricOutput = arg3;
    if (metricInput == "m") {
        if (metricOutput == "cm") {
            console.log((number * 100).toFixed(3));
        }
        else console.log((number * 1000).toFixed(3))
    }
    else if (metricInput == "cm") {
        if (metricOutput == "m") {
            console.log((number / 100).toFixed(3));
        }
        else console.log((number * 10).toFixed(3));
    }
    else {
        if (metricOutput == "cm") {
            console.log((number / 10).toFixed(3));
        }
        else console.log((number / 1000).toFixed(3));
    }
}