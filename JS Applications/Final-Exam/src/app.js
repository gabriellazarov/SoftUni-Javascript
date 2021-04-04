import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from '../src/api/data.js';


import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { allArticlesPage } from './views/allArticles.js';
import { createPage } from './views/createArticle.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';


const main = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', logoutBtn);


page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/all-articles', decorateContext, allArticlesPage);
page('/create', decorateContext, createPage);
page('/article-details/:id', decorateContext, detailsPage);
page('/article-edit/:id', decorateContext, editPage);


//optional
import { searchPage } from './views/search.js';
page('/search', decorateContext, searchPage);



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
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    } else {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('user').style.display = 'block';
    }
}

async function logoutBtn() {
    await logout();
    page.redirect('/');
    navView();
}