const { Router } = require("express");
const usersRouter = Router();

const UserController = require("../Controllers/UserController")
const userController = new UserController();


usersRouter.post("/", userController.create)

module.exports = usersRouter;