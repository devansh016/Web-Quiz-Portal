const User = require('../models/user');
const bcrypt = require('bcryptjs');

async function authenticate({ username, password }) {
    // finding the use detail
    const user = await User.findOne({ username });

    // validating password and checking if user exists
    if (user && bcrypt.compareSync(password, user.password)) {
        return {
            ...user.toJSON()
        };
    }
}

async function register(userParam) {
    // check if username can be taken
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // hashing the password
    if (userParam.password) {
        user.password = bcrypt.hashSync(userParam.password, 10);
    }

    // saving the user
    await user.save();
}

module.exports ={
    authenticate,
    register
}
