const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const usersSchema = new Schema({
  id: ObjectId,
  username: String,
  name: String,
  password: String,
});

const users = (module.exports = mongoose.model("users", usersSchema));

function login(req, res) {
  console.log(req.body);
  users.find(
    { username: req.body.username, password: req.body.password },
    function (error, userItem) {
      if (error) throw error;
      res.send(userItem);
    }
  );
}

function createUser(req, res) {
  users.create(req.body, (err, request) => {
    if (err) {
      throw err;
    }
    res.send(request);
  });
}

module.exports = { login, createUser };
