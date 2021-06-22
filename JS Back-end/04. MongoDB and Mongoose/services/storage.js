const fs = require('fs/promises');
const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const Comment = require('../models/Comments');


async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            edit,
            createComment
        };
        next();
    };
}

async function getAll(query) {
    const options = {};

    if (query.search) {
        options.name = { $regex: query.search, $options: 'i' };
    }
    if (query.from) {
        options.difficulty = { $gte: Number(query.from) };
    }
    if (query.to) {
        options.difficulty = options.difficulty || {};
        options.difficulty = { $lte: Number(query.to) };
    }

    const cubes = Cube.find(options).lean();
    return cubes;
}

async function getById(id) {
    const cube = Cube.findById(id).populate('comments').lean();
    if (cube) {
        return cube;
    } else {
        return undefined;
    }
}

async function create(cube) {
    const record = new Cube(cube);
    record.save();
}

async function edit(id, cube) {
    const existing = await Cube.findById(id);

    if (!existing) {
        throw new ReferenceError('No such ID in database');
    }

    Object.assign(existing, cube);
    return existing.save();
}

async function createComment(cubeId, comment) {
    const existing = await Cube.findById(cubeId);

    if (!existing) {
        throw new ReferenceError('No such ID in database');
    }

    const newComment = new Comment(comment);
    await newComment.save();

    existing.comments.push(newComment);
    await existing.save();
}



module.exports = {
    init,
    getAll,
    getById,
    create,
    edit,
    createComment
};