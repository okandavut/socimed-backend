const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const postsSchema = new Schema({
  id: ObjectId,
  title: String,
  post: String,
  postUserId: String,
  postDate: Date,
  isActive: Boolean,
});

const posts = (module.exports = mongoose.model("posts", postsSchema));

function createPost(req, res) {
  req.body.postDate = new Date();
  req.body.isActive = true;
  posts.create(req.body, (err, request) => {
    if (err) {
      throw err;
    }
    res.send(request);
  });
}

function getAllActivePosts(req, res) {
  posts.find({ isActive: true }, function (error, requests) {
    if (error) throw error;
    res.send(requests);
  });
}

function getAllPostByUser(req, res) {
  posts.find({ postUserId: req.body.postUserId }, function (error, requests) {
    if (error) throw error;
    res.send(requests);
  });
}

function deletePost(req, res) {
  posts.findOneAndRemove({ _id: req.body.id }, function (error, requests) {
    if (error) throw error;
    res.send(true);
  });
}

module.exports = {
  createPost,
  getAllActivePosts,
  getAllPostByUser,
  deletePost,
};
