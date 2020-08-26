require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const { APP_PORT } = process.env;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(APP_PORT, (err) => {
  if (err) throw err;
  console.log(`Server run on port ${APP_PORT}`);
});

module.exports = {
  express,
  app,
};
