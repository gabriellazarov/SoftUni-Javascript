function solve(input) {
    let n = Number(input.shift());
    let passwords = [];
    for (let i = 0; i < n; i++) {
        passwords[i] = input[i];
    }
    let regex = /^(.+)>(\d{3})\|([a-z]{3})\|([A-Z]{3})\|([^<>]{3})<\1$/m;
    for (let i = 0; i < n; i++) {
        if (regex.test(passwords[i])) {
            let match = regex.exec(passwords[i]);
            console.log("Password: " + match[2] + match[3] + match[4] + match[5]);
        } else {
            console.log("Try another password!");
        }
    }
}

solve([
    '3',
    '##>00|no|NO|!!!?<###',
    '##>123|yes|YES|!!!<##',
    '$$<111|noo|NOPE|<<>$$'
]);

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);

