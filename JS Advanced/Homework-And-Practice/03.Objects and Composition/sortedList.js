function createSortedList() {
    const list = {
        collection: [],
        add(element) {
            this.collection.push(element);
            this.collection.sort((a, b) => a - b);
        },
        remove(index) {
            this.collection.splice(index, 1);
        },
        get(index) {
            return this.collection[index];
        },
        size() {
            return this.collection.length;
        }
    }
    return list;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
