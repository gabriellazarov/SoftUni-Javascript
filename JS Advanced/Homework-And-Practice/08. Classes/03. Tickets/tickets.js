function solve(arr, str) {
    class tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let answer = [];
    for (let ticket of arr) {
        let current = ticket.split('|');
        answer.push(new tickets(current[0], current[1], current[2]));
    }

    if (str == 'destination') {
        answer.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (str == 'price') {
        answer.sort((a, b) => a.price - b.price);
    } else {
        answer.sort((a, b) => a.status.localeCompare(b.status));
    }
    return answer;
}



solve(['Boston|126.20|departed',
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold'],
    'price')