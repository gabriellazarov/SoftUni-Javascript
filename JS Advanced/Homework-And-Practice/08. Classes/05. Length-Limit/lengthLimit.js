class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(length) {
        this.innerLength += length;
        if (this.innerLength < 0) this.innerLength = 0;
    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) this.innerLength = 0;
    }
    toString() {
        let output = this.innerString;
        if (output.length > this.innerLength) {
            output = output.slice(0, this.innerLength);
            return output + '...';
        }else return output;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
