import { html } from '../../node_modules/lit-html/lit-html.js';
import { carDetails, editCar } from '../api/data.js';

const editTemplate = (formChecker, data) => html`
<section id="edit-listing">
    <div class="container">

        <form id="edit-form" @submit=${formChecker}>
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${data.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${data.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${data.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${data.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${data.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${data.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editCarPage(ctx) {
    const listingId = ctx.params.id;
    const data = await carDetails(listingId);
    ctx.render(editTemplate(editForm, data));

    async function editForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        let year = formData.get('year');
        const imageUrl = formData.get('imageUrl');
        let price = formData.get('price');

        if (brand == '' || model == '' || description == '' || year == '' || imageUrl == '' || price == '') return window.alert('All fields must be filled!');

        year = Number(year);
        price = Number(price);

        if (year < 0 || price < 0) return window.alert('Year and price must be positive numbers!');

        await editCar(listingId, { brand, model, description, year, imageUrl, price });
        ctx.page.redirect(`/details/${listingId}`);
    }
}