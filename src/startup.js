const express = require('express');
const config = require('./config/config');
var tempRouter = require('./routes/temproutes');
const bodyParser = require('body-parser');
const helmet = require("helmet");
var morgan = require('morgan')

const app = express();

app.use(helmet());

app.use(async function(req, res, next) {
    console.log("test visky middleware");
    await next();
});

app.use(bodyParser.json());

app.use(morgan('tiny'));

app.use(tempRouter);

app.listen(config.port);

module.exports = { app };