function attachEvents() {

    async function send() {
        let name = document.querySelector("#controls > input[type=text]:nth-child(2)");
        let message = document.querySelector("#controls > input[type=text]:nth-child(5)");

        const response = await fetch('http://localhost:3030/jsonstore/messenger', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: name.value, content: message.value })
        });
        await response.json();
        name.value = '';
        message.value = '';
    }

    async function refresh() {
        const response = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await response.json();

        let textArea = document.getElementById('messages');
        textArea.textContent = '';

        Object.entries(data).forEach(a => {
            textArea.textContent += `${a[1].author}: ${a[1].content}\n`;
        })
    }

    document.getElementById('submit').addEventListener('click', send);
    document.getElementById('refresh').addEventListener('click', refresh);
}

attachEvents();