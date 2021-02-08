class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }
    add(element) {
        this.list.push(Number(element));
        this.list.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (this.list[index] == undefined) {
            throw new Error('Index is out of bounds');
        } else {
            this.list.splice(index, 1);
        }
        this.size--;
    }
    get(index) {
        if (this.list[index] == undefined) {
            throw new Error('Index is out of bounds');
        } else {
            return this.list[index];
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
