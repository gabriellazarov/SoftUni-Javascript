function inventory(arr) {
    let ezArr = [];
    for (let i = 0; i < arr.length; i++) {
        ezArr[i] = arr[i].split(" ");
    }
    let equipment = ezArr[0];
    for (let i = 1; i < ezArr.length; i++) {
        if (ezArr[i][0] == 'Buy') {
            if (equipment.includes(ezArr[i][1]));
            else equipment.push(ezArr[i][1]);
        } else if (ezArr[i][0] == 'Trash') {
            if (equipment.includes(ezArr[i][1])) {
                equipment.splice(equipment.indexOf(ezArr[i][1]), 1);
            }
        } else if (ezArr[i][0] == 'Repair') {
            if (equipment.includes(ezArr[i][1])) {
                let pushedEl = equipment.splice(equipment.indexOf(ezArr[i][1]), 1);
                equipment.push(pushedEl);
            }
        } else {
            ezArr[i][1] = ezArr[i][1].split("-");
            if (equipment.includes(ezArr[i][1][0])) {
                let upgrade = ezArr[i][1][0] + ':' + ezArr[i][1][1]
                equipment.splice(equipment.indexOf(ezArr[i][1][0]) + 1, 0, upgrade);
            }
        }
    }
    console.log(equipment.join(" "))
}



inventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])
inventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])