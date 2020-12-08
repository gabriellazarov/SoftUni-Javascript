function twoSums(a) {
    function evenSum(a) {
        let num = String(a);
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) % 2 == 0) {
                sum += Number(num[i]);
            }
        }
        return sum;
    }
    function oddSum(a) {
        let num = String(a);
        let sum = 0;
        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) % 2 != 0) {
                sum += Number(num[i]);
            }
        }
        return sum;
    }
    console.log(`Odd sum = ${oddSum(a)}, Even sum = ${evenSum(a)}`)
}
twoSums(1000435)