const { Router } = require("express.jsx");

const routes = Router();

const SessionsControllers = require("../controllers/SessionsControllers.jsx");

const sessionsControllers = new SessionsControllers();

routes.post("/", sessionsControllers.create);

module.exports = routes;