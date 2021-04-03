import { html } from '../../node_modules/lit-html/lit-html.js';
import { filterByYear } from '../api/data.js';


const searchTemplate = (search, data = '') => html`
<section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button class="button-list" @click=${search}>Search</button>
    </div>

    ${typeof data == 'object' ? html`<h2>Results:</h2>
    <div class="listings">
        ${data.length ? data.map(listingTemplate) : html`<p class="no-cars"> No results.</p>`}
    </div>` : ''}
</section>`;

const listingTemplate = (item) => html`
<div class="listing">
    <div class="preview">
        <img src=${item.imageUrl}>
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href=${`/listing-details/${item._id}`} class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;


export async function searchListingsPage(ctx) {
    ctx.render(searchTemplate(searchBtn));

    async function searchBtn() {
        const query = document.querySelector("#search-cars > div.container > input[type=text]").value;
        if (query == '') return window.alert('Search query is invalid!');
        const data = await filterByYear(query);
        ctx.render(searchTemplate(searchBtn, data));
    }
}