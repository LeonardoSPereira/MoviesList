const { Router } = require("express");
const routes = Router();

const usersRouter = require("./user.routes");
const notesRouter = require("./notes.routes")

routes.use("/users", usersRouter);
routes.use("/notes", notesRouter);


module.exports = routes;
