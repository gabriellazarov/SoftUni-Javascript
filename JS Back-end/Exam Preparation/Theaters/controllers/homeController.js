const router = require('express').Router();

router.get('/', async (req, res) => {
    if (!req.user) {
        let plays = await req.storage.getAllPlays();
        plays = plays.sort((a, b) => a.usersLiked.length - b.usersLiked.length).slice(0, 3);

        res.render('guest-home', { plays });
    } else {
        let plays = await req.storage.getAllPlays();
        plays = plays.sort((a, b) => a.createdAt - b.createdAt);

        res.render('user-home', { plays });
    }
});


module.exports = router;