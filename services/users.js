class UserService {
    constructor() {
    }

    async getUsers() {
        return "get users"
    }

    async getUser(userId) {
        return "get user byid"
    }

    async postUser(user) {
        return "post users"
    }

    async putUser(userId,user) {
        return "put users"
    }

    async deleteUser(userId) {
        return "delete user"
    }
}

module.exports = new UserService();