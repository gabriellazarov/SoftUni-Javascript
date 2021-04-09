import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from '../src/api/data.js';


import { homePage } from './views/home.js';



const main = document.getElementById('container');
document.getElementById('logoutBtn').addEventListener('click', logoutBtn);


page('/', decorateContext, homePage);




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