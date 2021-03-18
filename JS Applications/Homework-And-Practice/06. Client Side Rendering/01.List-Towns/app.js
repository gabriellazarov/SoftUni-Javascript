import { html, render } from '../../node_modules/lit-html/lit-html.js';


const root = document.getElementById('root');

const townTemplate = data => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>`;



function load(event) {
    event.preventDefault();

    let towns = document.getElementById('towns').value;
    if (towns == '') return;

    towns = towns.split(',').map(x => x.trim());

    const toRender = townTemplate(towns);
    render(toRender, root);
}

document.getElementById('btnLoadTowns').addEventListener('click', load);