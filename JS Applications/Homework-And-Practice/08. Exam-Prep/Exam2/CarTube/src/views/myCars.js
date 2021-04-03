import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyCars } from '../api/data.js';

const myListingsTemplate = (data) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        ${data.length ? data.map(listingTemplate) : html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
    </div>
</section>`;

const listingTemplate = (item) => html`
<div class="listing">
    <div class="preview">
        <img src=${item.imageUrl}>
    </div>
    <h2>${`${item.brand} ${item.model}`}</h2>
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

export async function myCarsPage(ctx) {
    const data = await getMyCars();

    ctx.render(myListingsTemplate(data));
}