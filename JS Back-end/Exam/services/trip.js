const Trip = require('../models/Trip');

async function offerTrip(tripData) {

    const trip = new Trip(tripData);

    await trip.save();

    return trip;
}

async function getAllTrips() {

    const trip = await Trip.find().lean();

    return trip;
}

async function getTripById(id) {

    const existing = await Trip.findById(id).lean();

    if (!existing) {
        throw new Error('Such a trip doesn\'t exist!')
    }

    return existing;
}

async function editTrip(id, tripData) {

    let trip = await Trip.findById(id);

    if (!trip) {
        throw new Error('Such a trip doesn\'t exist!')
    }

    trip.startPoint = tripData.startPoint;
    trip.endPoint = tripData.endPoint;
    trip.date = tripData.date;
    trip.time = tripData.time;
    trip.carImage = tripData.carImage;
    trip.carBrand = tripData.carBrand;
    trip.seats = tripData.seats;
    trip.price = tripData.price;
    trip.description = tripData.description;


    await trip.save();

    return trip;
}

async function deleteTrip(id) {
    return Trip.findByIdAndDelete(id);
}

async function joinTrip(tripId, userId) {

    let trip = await Trip.findById(tripId);

    trip.buddies.push(userId);
    trip.seats--;

    await trip.save();

    return trip;
}

module.exports = {
    offerTrip,
    getAllTrips,
    getTripById,
    editTrip,
    deleteTrip,
    joinTrip
};