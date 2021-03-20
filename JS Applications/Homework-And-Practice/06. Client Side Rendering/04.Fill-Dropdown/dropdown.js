import { render, html } from '../../node_modules/lit-html/lit-html.js';

async function renderOptions() {
    const data = Object.values(await (await fetch('http://localhost:3030/jsonstore/advanced/dropdown')).json());
    const options = data.map(optionsRender);
    render(options, body);
}

async function postElement(event) {
    event.preventDefault();
    const textArea = document.getElementById('itemText');
    if (textArea.value == '') return;

    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: textArea.value })
    });

    if (response.ok) {
        textArea.value = '';
        renderOptions();
    }
}


const body = document.getElementById('menu');

document.querySelector("body > article > form > input[type=submit]:nth-child(3)").addEventListener('click', postElement)

const optionsRender = element => html`<option value=${element._id}>${element.text}</option>`;

renderOptions();
