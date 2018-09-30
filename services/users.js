'use strict';

const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    User = mongoose.model('User');

class UserService {
    constructor() {
    }

    async getUsers() {
        return "get users"
    }

    async getUser(userId) {
        return "get user byid"
    }

    async registerUser(user) {
        var newUser = new User(user);
        newUser.hash_password = bcrypt.hashSync(user.password, 10);
        await newUser.save(user);
        user.hash_password = undefined;
        return user;

    }

    async sign_in(user) {
        let userOnDB = await User.findOne({
            email: user.email
        });

        if (!userOnDB || !userOnDB.comparePassword(user.password, userOnDB.hash_password)) {
            throw 'Authentication failed. Invalid user or password.';
        }

        return jwt.sign({ email: userOnDB.email, fullName: userOnDB.fullName, _id: userOnDB._id }, 'RESTFULAPIs');
    }

    async putUser(userId, user) {
        return "put users"
    }

    async deleteUser(userId) {
        return "delete user"
    }
}

module.exports = new UserService();