import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (formchecker) => html`
<section id="login">
    <form id="login-form" @submit=${formchecker}>
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(formCheck));

    async function formCheck(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (password == '' || email == '') return window.alert('All fields must be filled!');
        await login(email, password);
        ctx.page.redirect('/allMemes');
        ctx.navView();
    }
}