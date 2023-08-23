const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite")

class UserController {
    async create (req, res) {
        const { name, email, password } = req.body;

        const database = await sqliteConnection()
    }
}

module.exports = UserController;