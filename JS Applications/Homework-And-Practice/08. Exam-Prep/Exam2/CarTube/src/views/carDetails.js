import { html } from '../../node_modules/lit-html/lit-html.js';
import { carDetails, deleteCar } from '../api/data.js';

const listingTemplate = (data, deleteBtn) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src=${data.imageUrl}>
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}$</li>
        </ul>

        <p class="description-para">${data.description}</p>

        ${sessionStorage.getItem('userId') == data._ownerId ? html`<div class="listings-buttons">
            <a href=${`/edit-listing/${data._id}`} class="button-list">Edit</a>
            <a href="javascript:void(0)" class="button-list" @click=${deleteBtn}>Delete</a>
        </div>` : ''}
    </div>
</section>`;

export async function carDetailsPage(ctx) {
    const listingId = ctx.params.id;
    const data = await carDetails(listingId)

    ctx.render(listingTemplate(data, deleteBtn))

    async function deleteBtn() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteCar(listingId);
            ctx.page.redirect('/all-listings');
        }
    }
}