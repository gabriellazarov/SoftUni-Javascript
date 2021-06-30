const { Schema, model } = require('mongoose');


const schema = new Schema({
    email: { type: String, required: [true, 'Email is required!'], match: [/^.+@.+$/, 'Email is invalid!'] },
    hashedPassword: { type: String, required: [true, 'Password is required!'] },
    gender: { type: String, required: [true, 'Gender is required!'], enum: { values: ['male', 'female'], message: 'Gender must be male or female' } },
    tripsHistory: [{ type: Schema.Types.ObjectId, ref: 'Trip', default: [] }]
});

module.exports = model('User', schema);