import { html } from '../../node_modules/lit-html/lit-html.js';
import { createArticle } from '../api/data.js';

const createTemplate = (formChecker) => html`
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form id="create" action="#" method="" @submit=${formChecker}>
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>`;



export async function createPage(ctx) {

    ctx.render(createTemplate(createForm));

    async function createForm(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const title = formData.get('title');
        const category = formData.get('category');
        const content = formData.get('content');

        let validCategories = ['JavaScript', 'C#', 'Java', 'Python']

        if (title == '' || category == '' || content == '') return window.alert('All fields must be filled!');

        if (validCategories.includes(category) == false) return window.alert('Invalid category!');

        await createArticle({ title, category, content });
        ctx.page.redirect('/');
    }
}