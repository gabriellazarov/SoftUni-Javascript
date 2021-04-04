import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllArticles } from '../api/data.js';

const allArticlesTemplate = (data) => html`
<section id="catalog-page" class="content catalogue">
    <h1>All Articles</h1>

    ${data.length ? data.map(articleTemplate) : html`<h3 class="no-articles">No articles yet</h3>`}

</section>`;

const articleTemplate = (item) => html`
<a class="article-preview" href=${`/article-details/${item._id}`}> <article>
    <h3>Topic: <span>${item.title}</span></h3>
    <p>Category: <span>${item.category}</span></p>
    </article>
</a>`

export async function allArticlesPage(ctx) {
    const data = await getAllArticles();
    ctx.render(allArticlesTemplate(data));
}