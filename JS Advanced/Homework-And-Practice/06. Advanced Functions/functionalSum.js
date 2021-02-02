function solve(n) {
    function add(a) {
        n+=a;
        return add;
    }
    add.toString = () => n;
    return add;
}

solve(1);
solve(2);