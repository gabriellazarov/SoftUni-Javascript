const { about } = require('../controllers/about');
const { catalog } = require('../controllers/catalog');
const { create, post } = require('../controllers/create');
const { details } = require('../controllers/details');
const { notFound } = require('../controllers/notFound');
const { editPage, editPost } = require('../controllers/edit');
const { post: commentPost } = require('../controllers/comments');


module.exports = (app) => {
    app.get('/', catalog);
    app.get('/details/:id', details);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', post);

    app.get('/edit/:id', editPage);
    app.post('/edit/:id', editPost);

    app.post('/comments/:id/create', commentPost);

    app.all('*', notFound);
};