import { html } from '../../node_modules/lit-html/lit-html.js';
import { memeDetails, deleteMeme } from '../api/data.js';

const detailsTemplate = (data, deleteBtn) => html`
<section id="meme-details">
    <h1>Meme Title: ${data.title} </h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${data.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${data.description}</p>

            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            ${data._ownerId == sessionStorage.getItem('userId') ? html`<a class="button warning" href=${"/edit/" + data._id}>Edit </a>
            <button class="button danger" @click=${deleteBtn}>Delete</button>` : ''}

        </div>
    </div>
</section>`;


export async function memeDetailsPage(ctx) {
    const memeId = ctx.params.id;
    const data = await memeDetails(memeId);

    ctx.render(detailsTemplate(data, deleteBtn))

    async function deleteBtn() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteMeme(memeId);
            ctx.page.redirect('/allMemes')
        }
    }
}