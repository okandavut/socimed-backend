var express = require("express");
var userRouter = express.Router();

var user_controller = require("../controllers/userController");

userRouter.get("/login", user_controller.login);
userRouter.post("/createuser", user_controller.createUser);

module.exports = userRouter;
