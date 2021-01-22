function solve() {
    const hero = {
        mage(name) {
            const magus = {
                name,
                health: 100,
                mana: 100,
                cast(spell) {
                    console.log(`${this.name} cast ${spell}`);
                    this.mana -= 1;
                }
            };
            return magus;
        },
        fighter(name) {
            const magus = {
                name,
                health: 100,
                stamina: 100,
                fight() {
                    console.log(`${this.name} cslashes at the foe`);
                    this.stamina -= 1;
                }
            };
            return magus;
        }
    };
    return hero;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
