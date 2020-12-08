function dark(arr) {
    a = arr[0];
    let current = '';
    let health = 100;
    let coins = 0;
    let potion = '';
    let chest = '';
    let monster = '';
    let damage = '';
    let room = 1;
    let flag = false;
    for (let i = 0; i <= a.length; i++) {

        if (a[i] == '|' || a[i] == undefined) {
            if (current[0] + current[1] + current[2] + current[3] + current[4] + current[5] == 'potion') {
                for (let j = 7; j < current.length; j++) potion += current[j];
                if (health + Number(potion) > 100) {
                    console.log(`You healed for ${100 - health} hp.`)
                    health = 100;
                } else {
                    console.log(`You healed for ${Number(potion)} hp.`)
                    health += Number(potion);
                }
                console.log(`Current health: ${health} hp.`)
            } else if (current[0] + current[1] + current[2] + current[3] + current[4] == 'chest') {
                for (let j = 6; j < current.length; j++) chest += current[j];
                coins += Number(chest);
                console.log(`You found ${chest} coins.`)
            } else {
                let j = 0;
                while (current[j] != ' ') {
                    monster += current[j];
                    j++;
                }
                j++;
                for (j; j < current.length; j++) damage += current[j];
                damage = Number(damage);
                health -= damage;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`)
                } else {
                    console.log(`You died! Killed by ${monster}.`)
                    flag = true;
                    console.log(`Best room: ${room}`)
                }
            }
            room++;
            current = '';
            potion = '';
            chest = '';
            monster = '';
            damage = '';
        } else current += a[i];
        if (flag) break;
    }
    if (flag == false) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}
dark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);