var express = require("express");
var userRouter = express.Router();

var user_controller = require("../controllers/usercontroller");

userRouter.post("/login", user_controller.login);
userRouter.post("/createuser", user_controller.createUser);
userRouter.post("/deleteUser", user_controller.deleteUser);

module.exports = userRouter;
