const { Router } = require("express");

const usersRoutes = require("./users.routes.jsx");
const notesRoutes = require("./notes.routes.jsx");
const sessionsRoutes = require("./sessions.routes.jsx");

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/notes", notesRoutes);
routes.use("/sessions", sessionsRoutes);

module.exports = routes;