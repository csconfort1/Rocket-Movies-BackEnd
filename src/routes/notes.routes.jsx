const { Router } = require("express");
const { route } = require("express/lib/router.jsx");

const routes = Router();
const NotesControllers = require("../controllers/NotesControllers.jsx");
const notesControllers = new NotesControllers();
const ensureAuthenticated = require("../middlewares/ensureAuthenticated.jsx");

routes.use(ensureAuthenticated);
routes
  .post("/", notesControllers.create)
  .put("/:id", notesControllers.update)
  .delete("/:id", notesControllers.delete)
  .get("/:id", notesControllers.show)
  .get("/", notesControllers.index);

module.exports = routes;