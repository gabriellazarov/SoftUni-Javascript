(function solve() {
    String.prototype.ensureStart = function (str) {
        if (this.indexOf(str) == 0) {
            return this.toString();
        }
        return str + this;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.indexOf(str) == this.length-str.length) {
            return this.toString();
        }
        return this + str;
    };

    String.prototype.isEmpty = function () {
        if (this == '') return true;
        return false;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) return this.toString();

        if (n < 4) return ('.').repeat(n);

        if (this.includes(' ') == false) return this.slice(0, n - 3) + '...';

        let result = this.split(' ');
        result.pop();
        result = result.join(' ') + '...';
        while (result.length > n) {
            result = result.split(' ');
            result.pop();
            result = result.join(' ') + '...';
        }
        return result;
    };

    String.format = function (string, ...params) {
        let regex = /{[0-9]}/;
        let match = regex.exec(string);

        while (match != undefined) {
            if (params[0] != undefined) {
                string = string.replace(match[0], params.shift());
                match = regex.exec(string);
            }
            else break;
        }
        return string;
    };
}());

var testString = 'quick brown fox jumps over the lazy dog';
var answer = testString.ensureStart('the ');
console.log(answer);
answer = answer.ensureStart('the ');
console.log(answer);




