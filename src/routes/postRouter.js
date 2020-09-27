var express = require("express");
var postRouter = express.Router();

var post_controller = require("../controllers/postController");

postRouter.post("/createPost", post_controller.createPost);
postRouter.get("/getAllActivePosts", post_controller.getAllActivePosts);
postRouter.get("/getAllPostByUser", post_controller.getAllPostByUser);
postRouter.post("/deletePost", post_controller.deletePost);
postRouter.get("/searchPostByTitle", post_controller.searchPostByTitle);

module.exports = postRouter;
