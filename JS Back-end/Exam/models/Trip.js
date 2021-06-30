const { Schema, model } = require('mongoose');


const schema = new Schema({
    startPoint: { type: String, required: [true, 'Starting point is required!'], minLength: [4, 'Starting point must be at least 4 characters long!'] },
    endPoint: { type: String, required: [true, 'Ending point is required!'], minLength: [4, 'End point must be at least 4 characters long!'] },
    date: { type: String, required: [true, 'Date is required!'] },
    time: { type: String, required: [true, 'Time is required!'] },
    carImage: { type: String, required: [true, 'Car image is required!'], match: [/^https?:\/\//, 'URL is invalid!'] },
    carBrand: { type: String, required: [true, 'Car brand is required!'], minLength: [4, 'Car brand must be at least 4 characters long!'] },
    seats: { type: Number, required: [true, 'Seats amount is required!'], min: [0, 'Seats must bewtween 0 and 4!'], max: [4, 'Seats msut bewtween 0 and 4!'] },
    price: { type: Number, required: [true, 'Price is required!'], min: [1, 'Price must between 1 and 50!'], max: [50, 'Price must between 1 and 50!'] },
    description: { type: String, required: [true, 'Description is required!'], minLength: [10, 'Description must be at least 10 characters long!'] },
    creatorId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    buddies: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }]
});

module.exports = model('Trip', schema);