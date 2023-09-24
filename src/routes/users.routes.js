const { Router } = require("express.jsx");
const routes = Router();

const UserControllers = require("../controllers/UsersControllers.jsx");
const usersControllers = new UserControllers();
const UsersAvatarController = require("../controllers/UsersAvatarController.jsx");
const usersAvatarController = new UsersAvatarController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated.jsx");

const multer = require("multer");
const uploadConfigs = require("../configs/upload.jsx");
const upload = multer(uploadConfigs.MULTER);

routes
  .post("/", usersControllers.create)
  .put("/", ensureAuthenticated, usersControllers.update)
  .patch(
    "/avatar",
    ensureAuthenticated,
    upload.single("avatar"),
    usersAvatarController.update
  );

module.exports = routes;