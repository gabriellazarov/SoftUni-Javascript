import { html } from '../../node_modules/lit-html/lit-html.js';
import { articleDetails, deleteArticle } from '../api/data.js';

const detailsTemplate = (item, deleteBtn) => html`
<section id="details-page" class="content details">
    <h1>${item.title}</h1>

    <div class="details-content">
        <strong>Published in category ${item.category}</strong>
        <p>${item.content}</p>

        <div class="buttons">
            ${sessionStorage.getItem('userId') == item._ownerId ? html`
            <a href="javascript:void(0)" class="btn delete" @click = ${deleteBtn}>Delete</a>
            <a href=${`/article-edit/${item._id}`} class="btn edit">Edit</a>` : ''}

            <a href="/" class="btn edit">Back</a>
        </div>
    </div>
</section>`;



export async function detailsPage(ctx) {
    const articleId = ctx.params.id;
    const data = await articleDetails(articleId);

    ctx.render(detailsTemplate(data,deleteBtn));

    async function deleteBtn() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteArticle(articleId);
            ctx.page.redirect('/');
        }
    }
}