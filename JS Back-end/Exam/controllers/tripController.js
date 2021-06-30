const router = require('express').Router();
const Trip = require('../models/Trip');

const { isGuest, isUser } = require('../middlewares/guards');

router.get('/shared', async (req, res) => {
    const trips = await req.storage.getAllTrips();
    res.render('shared-trips', { trips });
});

router.get('/offer', isUser(), (req, res) => {
    res.render('offer');
});

router.post('/offer', async (req, res) => {
    const tripData = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: Number(req.body.seats),
        price: Number(req.body.price),
        description: req.body.description,
        creatorId: req.user._id
    };
    try {
        await req.storage.offerTrip(tripData);

        res.redirect('/trip/shared');
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
            tripData
        };
        res.render('offer', ctx);
    }


});

router.get('/details/:id', async (req, res) => {
    let driver = await Trip.findById(req.params.id).populate('creatorId');
    driver = driver.creatorId.email;

    let buddies = await Trip.findById(req.params.id).populate('buddies');
    buddies = Object.values(buddies.buddies).map(a => a.email).join(', ');

    try {
        const trip = await req.storage.getTripById(req.params.id);
        const ctx = {
            trip,
            buddies,
            isCreator: req.user && req.user._id == trip.creatorId,
            availableSeats: (req.user && Number(trip.seats) > 0) ? trip.seats : false,
            hasJoined: req.user && trip.buddies.find(x => x == req.user._id),
            driver
        }

        res.render('details', ctx);
    } catch (err) {
        console.log(err);
        res.redirect('/trip/shared-trips');
    }
});


router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);
        if (req.user && trip.creatorId == req.user._id) {
            res.render('edit', { trip });
        } else {
            throw new Error('Access denied!')
        }
    } catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    console.log(req.body)
    let trip = req.body;
    trip._id = req.params.id;

    try {
        const existing = await req.storage.getTripById(req.params.id);

        if (!req.user || existing.creatorId != req.user._id) {
            throw new Error('Access denied!')
        }

        await req.storage.editTrip(req.params.id, trip)

        res.redirect('/trip/details/' + req.params.id)

    } catch (err) {
        let errors;
        if (err.errors) {
            errors = Object.values(err.errors).map(a => a.properties.message);
        } else {
            errors = [err.message]
        }

        const ctx = {
            errors,
            trip
        };
        res.render('edit', ctx);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (!req.user || trip.creatorId != req.user._id) {
            throw new Error('Access denied!');
        }

        await req.storage.deleteTrip(req.params.id);

        res.redirect('/trip/shared');

    } catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});


router.get('/join/:id', isUser(), async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (trip.creatorId == req.user._id) {
            throw new Error('Can\'t join your own trip!');
        }

        if (trip.buddies.find(x => x == req.user._id)) {
            throw new Error('Already joined!');
        }

        await req.storage.joinTrip(req.params.id, req.user._id);

        res.redirect('/trip/details/' + req.params.id);

    } catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});


module.exports = router;