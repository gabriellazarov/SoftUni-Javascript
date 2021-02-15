(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };

    Array.prototype.sum = function () {
        let result = 0;
        for (let el of this) {
            result += el;
        }
        return result;
    };

    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
}());


let testArray = [1, 2, 3];

console.log(testArray.last());
console.log(testArray.skip(1));
console.log(testArray.take(2));
console.log(testArray.sum());
console.log(testArray.average());
