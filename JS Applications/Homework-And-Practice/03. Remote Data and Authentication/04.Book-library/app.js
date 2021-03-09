function attachEvents() {

    async function submit(event) {
        event.preventDefault()

        let title = document.querySelector("body > form > input[type=text]:nth-child(3)");
        let author = document.querySelector("body > form > input[type=text]:nth-child(5)");

        if (author.value == '' || title.value == '') return;

        let entry = JSON.stringify({ author: author.value, title: title.value });

        await fetch('http://localhost:3030/jsonstore/collections/books', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: entry
        });

        title.value = '';
        author.value = '';
    }

    function edit(event) {
        let submitBtn = document.querySelector("body > form > button");
        submitBtn.id = event.target.parentElement.parentElement.id;
        submitBtn.textContent = 'Save';
        submitBtn.removeEventListener('click', submit);
        submitBtn.addEventListener('click', put);

        document.querySelector("body > form > h3").textContent = 'Edit FORM';
        document.querySelector("body > form > input[type=text]:nth-child(3)").value = event.target.parentElement.parentElement.children[0].textContent;
        document.querySelector("body > form > input[type=text]:nth-child(5)").value = event.target.parentElement.parentElement.children[1].textContent;
    }

    async function put(event) {
        let submitBtn = document.querySelector("body > form > button");
        event.preventDefault();
        const id = event.target.id;
        event.target.removeAttribute('id');


        let title = document.querySelector("body > form > input[type=text]:nth-child(3)");
        let author = document.querySelector("body > form > input[type=text]:nth-child(5)");

        if (author.value == '' || title.value == '') return;

        let entry = JSON.stringify({ author: author.value, title: title.value });

        await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: entry
        });


        title.value = '';
        author.value = '';
        document.querySelector("body > form > h3").textContent = 'FORM';

        submitBtn.removeEventListener('click', put);
        submitBtn.addEventListener('click', submit);
    }

    async function delet(event) {
        let id = event.target.parentElement.parentElement.id;
        await fetch('http://localhost:3030/jsonstore/collections/books/' + id, {
            method: 'delete'
        });
        loadBooks();
    }

    async function loadBooks() {
        let tableBody = document.querySelector("body > table > tbody");
        tableBody.innerHTML = '';

        const response = await fetch('http://localhost:3030/jsonstore/collections/books');
        const data = await response.json();

        Object.entries(data).forEach(a => {
            let tr = document.createElement('tr');

            let title = document.createElement('td');
            title.textContent = a[1].title;
            tr.appendChild(title);

            let author = document.createElement('td');
            author.textContent = a[1].author;
            tr.appendChild(author);

            let buttons = document.createElement('td');

            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', edit)
            buttons.appendChild(editBtn);

            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', delet)
            buttons.appendChild(deleteBtn);

            tr.appendChild(buttons);
            tr.id = a[0];

            tableBody.appendChild(tr);
        });
    }

    document.getElementById('loadBooks').addEventListener('click', loadBooks);
    document.querySelector("body > form > button").addEventListener('click', submit);
}

attachEvents()