function solve(input) {
    let converted = input.split(' ');
    for (let i = 0; i < converted.length; i++) {
        if (converted[i][0] == "#" && converted[i][1] != undefined) {
            if (!/[^a-zA-Z]/.test(converted[i].slice(1))) {
                console.log(converted[i].slice(1));
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')