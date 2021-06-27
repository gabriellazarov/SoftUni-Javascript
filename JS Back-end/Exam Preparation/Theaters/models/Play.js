const { Schema, model } = require('mongoose');


const schema = new Schema({
    title: { type: String, required: [true, 'Title is required!'] },
    description: { type: String, required: [true, 'Description is required!'], maxLength: [50, 'Description msut be shorter than 50 symbols!'] },
    imageUrl: { type: String, required: [true, 'Image URL is required!'] },
    isPublic: { type: Boolean, required: true, default: true },
    createdAt: { type: Date, required: true },
    usersLiked: [{ type: Schema.Types.ObjectId, ref: 'User' , default: []}],
    creatorId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Play', schema);