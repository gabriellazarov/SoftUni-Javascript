function solve(arr) {
    let br = 0;
    let newArr = [];
    for (let each of arr) {
        newArr[br] = each.split(" | ");
        br++;
    }
    for (let i = 0; i < newArr.length; i++) {
        let towns = new Object();
        towns.town = newArr[i][0];
        towns.latitude = Number(newArr[i][1]).toFixed(2);
        towns.longitude = Number(newArr[i][2]).toFixed(2);
        console.log(towns);
    }
    
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])