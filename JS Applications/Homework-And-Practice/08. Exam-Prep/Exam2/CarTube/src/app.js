import page from '..//node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout } from '../src/api/data.js';

import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { allListingsPage } from './views/allListings.js';
import { createCarPage } from './views/createCar.js';
import { carDetailsPage } from './views/carDetails.js';
import { editCarPage } from './views/editCar.js';
import { myCarsPage } from './views/myCars.js';

const main = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', logoutBtn);
navView();

page('/', decorateContext, homePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/all-listings', decorateContext, allListingsPage);
page('/create-listing', decorateContext, createCarPage);
page('/listing-details/:id', decorateContext, carDetailsPage);
page('/edit-listing/:id', decorateContext, editCarPage);
page('/my-listings', decorateContext, myCarsPage);


import { searchListingsPage } from './views/search.js';
page('/search-listings', decorateContext, searchListingsPage);


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
        document.getElementById('profile').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    } else {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('profile').style.display = 'block';
        document.querySelector("#profile > a:nth-child(1)").textContent = `Welcome, ${sessionStorage.getItem('username')}`
    }
}

async function logoutBtn() {
    await logout();
    page.redirect('/')
    navView();
}