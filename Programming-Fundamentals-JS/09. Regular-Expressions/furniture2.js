function solve(text) {
    let input = text.join(" ");
    let regex = />>(\w+)<<([\d.]+)!(\d+)/g;
    console.log("Bought furniture:")
    let match = regex.exec(input);
    let cost = 0;
    while (match != null) {
        console.log(match[1]);
        cost += Number(match[2]) * Number(match[3]);
        match = regex.exec(input);
    }
    console.log("Total money spend: " + cost.toFixed(2))
}


solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])