function solve(input) {
    let n = input.shift();
    let regex = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/g;
    let numberSearch = /(\d+)/g;
    let productGroup = '';
    for (let code of input) {
        if (regex.test(code)) {
            let match = numberSearch.exec(code);
            while (match != null) {
                productGroup += match[1];
                match = numberSearch.exec(code);
            }
            if (productGroup == '') console.log("Product group: 00");
            else console.log(`Product group: ${productGroup}`);
            productGroup = '';
        } else console.log("Invalid barcode");
    }
}


solve(['3',
    '@######FreshFisH@#########',
    '@###Brea0D@###',
    '@##Che46sE@##'
]);

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
]);