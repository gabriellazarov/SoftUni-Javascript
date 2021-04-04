import { html } from '../../node_modules/lit-html/lit-html.js';
import { articleDetails, editArticle } from '../api/data.js';

const editTemplate = (formChecker, data) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form id="edit" action="#" method="" @submit=${formChecker}>
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value = ${data.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category" .value = ${data.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value = ${data.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`;



export async function editPage(ctx) {
    const articleId = ctx.params.id;
    const data = await articleDetails(articleId);
    console.log(data)

    ctx.render(editTemplate(editForm, data));

    async function editForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');

        let validCategories = ['JavaScript', 'C#', 'Java', 'Python']

        if (title == '' || category == '' || content == '') return window.alert('All fields must be filled!');

        if (validCategories.includes(category) == false) return window.alert('Invalid category!');

        await editArticle(articleId, { title, category, content });
        ctx.page.redirect(`/article-details/${articleId}`);
    }
}