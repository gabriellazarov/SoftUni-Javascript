import { html } from '../../node_modules/lit-html/lit-html.js'
import { searchArticle } from '../api/data.js'

const searchTemplate = (data = '') => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>

    ${typeof data == 'object' ? html`<div class="search-container">
        ${data.length ? data.map(articleTemplate) : html`<h3 class="no-articles">No matching articles</h3>`}
    </div>` : ''}

</section>`;


const articleTemplate = (item) => html`
<a class="article-preview" href=${`/article-details/${item._id}`}> <article>
    <h3>Topic: <span>${item.title}</span></h3>
    <p>Category: <span>${item.category}</span></p>
    </article>
</a>`

export async function searchPage(ctx) {
    ctx.render(searchTemplate());

    document.getElementById('search-form').addEventListener('submit', queryChecker);

    async function queryChecker(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('search');
        if (query == '') return window.alert('All fields must be filled!');

        const data = await searchArticle(query);
        document.querySelector("#search-form > p.field.search > input[type=text]").value = '';
        ctx.render(searchTemplate(data));
    }
}