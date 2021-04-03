import { html } from '../../node_modules/lit-html/lit-html.js';
import { createCar } from '../api/data.js';

const createTemplate = (formChecker) => html`
<section id="create-listing">
    <div class="container">
        <form id="create-form" @submit=${formChecker}>
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

export async function createCarPage(ctx) {
    ctx.render(createTemplate(createForm));

    async function createForm(event) {
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

        await createCar({ brand, model, description, year, imageUrl, price });
        ctx.page.redirect(`/all-listings`);
    }
}