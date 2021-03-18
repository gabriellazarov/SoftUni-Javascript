import { cats } from './catSeeder.js';
import { render, html } from '../../node_modules/lit-html/lit-html.js';

console.log(cats)

const body = document.getElementById('allCats');

const catTemplate = data => html`
<ul>
    ${data.map(cat => html`<li>
        <img src="./images/${cat.imageLocation}.jpg"  width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}
</ul>`;

const catos = catTemplate(cats);

render(catos, body);

body.addEventListener('click', showStatus)

function showStatus(event) {
    if (event.target.classList.contains('showBtn')) {
        if (event.target.parentElement.children[1].style.display == 'block') event.target.parentElement.children[1].style.display = 'none';
        else event.target.parentElement.children[1].style.display = 'block';
    }
}