const User = require('../models/User');


async function createUser(username, hashedPassword) {

    //Adapt to project requirements

    const user = new User({
        username,
        hashedPassword
    });

    await user.save();

    return user;
}

async function getUserByUsername(username) {
    const regex = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: regex } });
    return user;
}

module.exports = {
    createUser,
    getUserByUsername
};