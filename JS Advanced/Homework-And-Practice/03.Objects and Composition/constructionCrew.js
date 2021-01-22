function solve(input) {
    let worker = input;
    if (worker.dizziness) {
        let drink = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += drink;
        worker.dizziness = false;
    }
    return worker;
}