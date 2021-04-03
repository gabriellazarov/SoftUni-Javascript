import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../api/data.js';

const allListingsTemplate = (data) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${data.length ? data.map(listingTemplate) : html`<p class="no-cars">No cars in database.</p>`}
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
            <a href=${`/listing-details/${item._id}`} class="button-carDetails" }>Details</a>
        </div>
    </div>
</div>`;

export async function allListingsPage(ctx) {
    const data = await getAllCars();

    ctx.render(allListingsTemplate(data));
}