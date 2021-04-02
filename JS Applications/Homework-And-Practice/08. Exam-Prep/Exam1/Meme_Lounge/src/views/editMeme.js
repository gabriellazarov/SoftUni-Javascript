import { html } from '../../node_modules/lit-html/lit-html.js';
import { memeDetails, editMeme } from '../api/data.js';

const editTemplate = (memeCurrently, formchecker) => html`
<section id="edit-meme">
    <form id="edit-form" @submit=${formchecker}>
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Meme Title" name="title" .value=${memeCurrently.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description"
                name="description">${memeCurrently.description}</textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl"
                .value=${memeCurrently.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;
export async function editMemePage(ctx) {
    const memeId = ctx.params.id;
    const memeCurrently = await memeDetails(memeId);
    ctx.render(editTemplate(memeCurrently, editForm));

    async function editForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');

        if (title == '' || description == '' || imageUrl == '') return window.alert('All fields must be filled!');

        await editMeme(memeId, { title, description, imageUrl });
        ctx.page.redirect('/details/' + memeId);
    }
}