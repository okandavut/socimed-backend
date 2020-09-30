const express = require("express");
const config = require("./config/config");

var userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");

const bodyParser = require("body-parser");
const helmet = require("helmet");
var morgan = require("morgan");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();
app.use(cors());

app.use(helmet());

mongoose.connect(
  "mongodb+srv://mrokt:123456**@cluster0-1xc2u.mongodb.net/socimed?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.use(morgan("tiny"));

//User Routes
app.use(userRouter);
app.use(postRouter);

app.listen(process.env.PORT || 3000);

module.exports = { app };
