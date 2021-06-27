const Play = require('../models/Play');


async function createPlay(playData) {

    const play = new Play(playData);

    await play.save();

    return play;
}

async function getAllPlays() {

    const plays = await Play.find({ isPublic: true }).lean();

    return plays;
}

async function getPlayById(id) {
    const existing = await Play.findById(id).lean();

    if (!existing) {
        throw new Error('Such a play doesn\'t exist!')
    }
    return existing;
}

async function editPlay(id, playData) {

    let play = await Play.findById(id);

    play.title = playData.title;
    play.description = playData.description;
    play.imageUrl = playData.imageUrl;
    play.isPublic = Boolean(playData.isPublic);

    await play.save();

    return play;
}

async function deletePlay(id) {
    return Play.findByIdAndDelete(id);
}

async function likePlay(playId, userId) {

    let play = await Play.findById(playId);

    play.usersLiked.push(userId);

    await play.save();

    return play;
}

module.exports = {
    createPlay,
    getAllPlays,
    editPlay,
    getPlayById,
    likePlay,
    deletePlay
};