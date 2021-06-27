const router = require('express').Router();

const { isGuest, isUser } = require('../middlewares/guards');

router.get('/create', isUser(), (req, res) => {
    res.render('theater/create');
});

router.post('/create', isUser(), async (req, res) => {
    const playData = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        isPublic: Boolean(req.body.isPublic),
        createdAt: new Date(),
        creatorId: req.user._id
    };
    try {
        await req.storage.createPlay(playData);

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
            playData
        };
        res.render('theater/create', ctx);
    }
});

router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);
        play.isOwner = req.user && req.user._id == play.creatorId;
        play.hasLiked = req.user && play.usersLiked.find(x => x == req.user._id);

        res.render('theater/details', { play });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (req.user._id != play.creatorId) {
            throw new Error('Must be owner to edit play!')
        }

        res.render('theater/edit', { play });
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (req.user._id != play.creatorId) {
            throw new Error('Must be owner to edit play!')
        }
        
        await req.storage.editPlay(req.params.id, req.body)

        res.redirect('/play/details/' + req.params.id);
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (req.user._id != play.creatorId) {
            throw new Error('Must be owner to delete play!')
        }

        await req.storage.deletePlay(req.params.id);

        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.redirect('/');
    }

});

router.get('/like/:id', isUser(), async (req, res) => {
    try {
        const play = await req.storage.getPlayById(req.params.id);

        if (req.user._id == play.creatorId) {
            throw new Error('Can\'t like your own plays!')
        }
        if (req.user && play.usersLiked.find(x => x == req.user._id)) {
            throw new Error('Already liked this play!')
        }
        await req.storage.likePlay(req.params.id, req.user._id);

        res.redirect('/play/details/' + req.params.id);
    } catch (err) {
        console.log(err);
        res.redirect('/play/details/' + req.params.id);
    }

});

module.exports = router;