var express = require("express");
var userRouter = express.Router();

var user_controller = require("../controllers/usercontroller");

userRouter.get("/login", user_controller.login);
userRouter.get("/createuser", user_controller.createUser);

module.exports = userRouter;
