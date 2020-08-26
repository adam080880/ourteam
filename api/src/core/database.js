require("dotenv").config();

const mysql = require("mysql");

const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASS: password,
  MYSQL_PORT: port,
  MYSQL_NAME: database,
} = process.env;

const connect = mysql.createConnection({
  host,
  user,
  password,
  port,
  database,
});

connect.connect((err) => {
  if (err) throw err;
  console.log(`Mysql database run on port ${port}`);
});

module.exports = connect;
