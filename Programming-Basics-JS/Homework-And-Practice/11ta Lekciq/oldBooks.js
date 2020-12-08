function yeet(inputData) {
    let wantedBook = inputData.shift();
    let libraryCapacity = Number(inputData.shift());
    let checkedBooks = 0;
    let isFound = false;
    while (checkedBooks < libraryCapacity) {
        let currentBook = inputData.shift();
        if (currentBook !== wantedBook) {
            checkedBooks++;
        } else {
            isFound = true;
            break;
        }
    }
    if (isFound === true) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${checkedBooks} books.`)
    }
}