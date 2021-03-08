function attachEvents() {

    async function deleteButton(event) {
        let id = event.target.parentElement.id;
        let response = await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
            method: 'delete'
        });
        event.target.parentElement.remove();
        return await response.json();
    }

    async function create() {
        let name = document.getElementById('person');
        let phone = document.getElementById('phone');

        if (name.value == '' || phone.value == '') return;
        
        const response = await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person: name.value, phone: phone.value })
        });

        name.value = '';
        phone.value = '';
        getEntries();
    }

    async function getEntries() {
        document.getElementById('phonebook').innerHTML = '';

        const response = await fetch('http://localhost:3030/jsonstore/phonebook');
        const data = await response.json();

        Object.entries(data).forEach(a => {
            let li = document.createElement('li');
            li.textContent = `${a[1].person}: ${a[1].phone}`;
            li.id = a[0];

            let dlt = document.createElement('button');
            dlt.textContent = 'Delete';
            dlt.addEventListener('click', deleteButton)
            li.appendChild(dlt);

            document.getElementById('phonebook').appendChild(li);
        });
    }

    document.getElementById('btnLoad').addEventListener('click', getEntries);
    document.getElementById('btnCreate').addEventListener('click', create)
}

attachEvents();