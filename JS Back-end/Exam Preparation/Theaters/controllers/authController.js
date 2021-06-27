const router = require('express').Router();

const { isGuest, isUser } = require('../middlewares/guards');


//Validate trough model

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {

    try {
        await req.auth.register(req.body.username.trim(), req.body.password.trim());

        if (req.body.password=='') {
            throw new Error('Password is required!');
        }

        if (req.body.password != req.body.rePass) {
            throw new Error('Passwords must match!');
        }
        res.redirect('/');

    } catch (err) {
        let errors;
        if (err.errors) {
            errors = Object.values(err.errors).map(a => a.properties.message);
        } else {
            errors = [err.message]
        }
        console.log(errors);

        const ctx = {
            errors,
            userData: { username: req.body.username }
        };
        res.render('register', ctx);
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body.username.trim(), req.body.password.trim());

        res.redirect('/');
    } catch (err) {
        console.log(err);


        let errors = [err.message];
        if (err.type == 'credential') {
            errors = ['Incorrect username or password'];
        }
        const ctx = {
            errors,
            userData: { username: req.body.username }
        };
        res.render('login', ctx);
    }
});

router.get('/logout', isUser(), (req, res) => {
    console.log('Logging out');
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;