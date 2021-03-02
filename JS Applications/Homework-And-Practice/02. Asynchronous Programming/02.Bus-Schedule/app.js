function solve() {

    let id;

    async function depart() {
        let currentStop = document.getElementById('info').children[0];

        if (currentStop.textContent == 'Not Connected') id = 'depot';

        let response = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + id);
        let data = await response.json();

        currentStop.textContent = 'Next stop ' + data.name;

        document.getElementById('depart').disabled = true;
        document.getElementById('arrive').disabled = false;
    }

    async function arrive() {
        let currentStop = document.getElementById('info').children[0];

        let response = await fetch('http://localhost:3030/jsonstore/bus/schedule/' + id);
        let data = await response.json();

        currentStop.textContent = 'Arriving at ' + data.name;
        id = data.next;

        document.getElementById('depart').disabled = false;
        document.getElementById('arrive').disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
