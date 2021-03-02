async function getInfo() {
    let stopID = document.getElementById('stopId').value;

    let url = 'http://localhost:3030/jsonstore/bus/businfo/' + stopID;

    Array.from(document.getElementById('buses').children).forEach(a => a.remove());

    if (stopID == 1287 || stopID == 1308 || stopID == 1327 || stopID == 2334) {
        let response = await fetch(url);
        let data = await response.json();
        document.getElementById('stopName').textContent = data.name;

        let buses = Object.entries(data.buses);
        for(let bus of buses){
            let newBus = document.createElement('li');
            newBus.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            document.getElementById('buses').appendChild(newBus);
        };
    }
    else {
        document.getElementById('stopName').textContent = 'Error';
    }
}
