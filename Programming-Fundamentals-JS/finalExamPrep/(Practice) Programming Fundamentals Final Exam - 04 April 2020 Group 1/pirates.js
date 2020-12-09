function solve(input) {
    let citiesPopulation = {};
    let citiesGold = {};
    let arrayCities = input.slice(0, input.indexOf("Sail")).map(a => a = a.split("||"));
    let commands = input.slice(input.indexOf("Sail") + 1, input.indexOf("End")).map(a => a = a.split("=>"));
    for (let i = 0; i < arrayCities.length; i++) {
        if (citiesGold.hasOwnProperty(arrayCities[i][0])) {
            citiesPopulation[arrayCities[i][0]] += Number(arrayCities[i][1]);
            citiesGold[arrayCities[i][0]] += Number(arrayCities[i][2]);
        } else {
            citiesPopulation[arrayCities[i][0]] = Number(arrayCities[i][1]);
            citiesGold[arrayCities[i][0]] = Number(arrayCities[i][2]);
        }
    }
    for (let i = 0; i < commands.length; i++) {
        if (commands[i][0] == "Plunder") {
            console.log(`${commands[i][1]} plundered! ${commands[i][3]} gold stolen, ${commands[i][2]} citizens killed.`);
            citiesPopulation[commands[i][1]] -= Number(commands[i][2]);
            citiesGold[commands[i][1]] -= Number(commands[i][3]);
            if (citiesGold[commands[i][1]] <= 0 || citiesPopulation[commands[i][1]] <= 0) {
                console.log(`${commands[i][1]} has been wiped off the map!`);
                delete citiesGold[commands[i][1]];
                delete citiesPopulation[commands[i][1]];
            }
        } else {
            if (Number(commands[i][2]) < 0) console.log("Gold added cannot be a negative number!");
            else {
                citiesGold[commands[i][1]] += Number(commands[i][2]);
                console.log(`${commands[i][2]} gold added to the city treasury. ${commands[i][1]} now has ${citiesGold[commands[i][1]]} gold.`)
            }
        }
    }
    let keys = Object.keys(citiesGold);
    if (keys.length == 0) console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    else {
        let easyMode = [];
        for (let i = 0; i < keys.length; i++) {
            let temp = [];
            temp[0] = keys[i];
            temp[1] = citiesPopulation[keys[i]];
            temp[2] = citiesGold[keys[i]];
            easyMode[i] = temp;
        }
        easyMode.sort((a, b) => b[2] - a[2]);
        for (let i = 0; i < easyMode.length - 1; i++) {
            if (easyMode[i][2] == easyMode[i + 1][2]) {
                if (easyMode[i][0].localeCompare(easyMode[i + 1][0]) > 0) {
                    let temp = easyMode[i][0];
                    easyMode[i][0] = easyMode[i + 1][0];
                    easyMode[i + 1][0] = temp;
                    i = 0;
                }
            }
        }
        console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`)
        for(let each of easyMode){
            console.log(`${each[0]} -> Population: ${each[1]} citizens, Gold: ${each[2]} kg`)
        }
    }
}

solve([
    'Zortuga||345000||2580',
    'Santo Domingo||240000||630',
    'Zavana||410000||1100',
    'Zavana||410000||1100',
    'Sail',
    'Plunder=>Zortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])