const { Schema, model } = require('mongoose');

//Add validation
const schema = new Schema({
    username: { type: String, required: [true, 'Username is required!'], minLength: [3, 'Username must be at least 3 characters long!'], match: [/^[a-zA-Z0-9]*$/, 'Username must consist of latin letters and numbers!'] },
    hashedPassword: { type: String, required: [true, 'Password is required!'] },
    likedPlays: [{ type: Schema.Types.ObjectId, ref: 'Play' }]
});

module.exports = model('User', schema);