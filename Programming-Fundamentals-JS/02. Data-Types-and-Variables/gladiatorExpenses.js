function expenses(lost, helm, sword, shield, armor) {
    console.log(`Gladiator expenses: ${(Math.floor(lost / 2) * helm + Math.floor(lost / 3) * sword + Math.floor(lost / 6) * shield + Math.floor(lost / 12) * armor).toFixed(2)} aureus`);
}
expenses(7,
    2,
    3,
    4,
    5
)