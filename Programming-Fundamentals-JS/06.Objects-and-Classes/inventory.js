function solve(input) {
    class hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr[i] = input[i].split(' / ');
    }
    arr.sort((a, b) => a[1] - b[1]);
    let heroes = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i][2] = arr[i][2].split(", ");
        arr[i][2].sort((a, b) => a.localeCompare(b));
        arr[i][2] = arr[i][2].join(", ");
        heroes[i] = new hero(arr[i][0], arr[i][1], arr[i][2])
    }
    for (let i = 0; i < heroes.length; i++) {
        console.log('Hero: ' + heroes[i].name);
        console.log('level => ' + heroes[i].level);
        console.log('items => ' + heroes[i].items);

    }
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])