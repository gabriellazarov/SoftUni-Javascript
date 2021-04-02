import page from "../node_modules/page/page.mjs"
import { render } from "../node_modules/lit-html/lit-html.js"

import { logout } from './api/data.js';

import { homePage } from './views/home.js';
import { allMemesPage } from './views/allMemes.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { createMemePage } from './views/createMeme.js';
import { memeDetailsPage } from './views/memeDetails.js';
import { editMemePage } from './views/editMeme.js';
import { userProfilePage } from './views/userProfile.js';


const main = document.querySelector("#container > main");
document.querySelector("#container > nav > div.user > div > a:nth-child(3)").addEventListener('click', logoutBtn);

page('/', decorateContext, homePage)
page('/allMemes', decorateContext, allMemesPage);
page('/register', decorateContext, registerPage);
page('/login', decorateContext, loginPage);
page('/create', decorateContext, createMemePage);
page('/details/:id', decorateContext, memeDetailsPage);
page('/edit/:id', decorateContext, editMemePage);
page('/profile', decorateContext, userProfilePage);

page.start();
navView();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.navView = navView;
    next();
}

function navView() {
    const flag = sessionStorage.getItem('authToken');
    if (flag == null) {
        document.getElementsByClassName('user')[0].style.display = 'none';
        document.getElementsByClassName('guest')[0].style.display = 'block';
    } else {
        document.getElementsByClassName('guest')[0].style.display = 'none';
        document.getElementsByClassName('user')[0].style.display = 'block';
        document.querySelector("#container > nav > div.user > div > span").textContent = `Welcome, ${sessionStorage.getItem('email')}`
    }
}

async function logoutBtn() {
    await logout();
    page.redirect('/')
    navView();
}