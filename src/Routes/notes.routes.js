const { Router } = require("express");
const notesRouter = Router();

const NotesController = require("../Controllers/NotesController")
const notesController = new NotesController();


notesRouter.post("/:user_id", notesController.create);



module.exports = notesRouter;