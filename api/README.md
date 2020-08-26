# Express Service Layer
Express JS with service layer design pattern, inspired by this [article](https://medium.com/@mhdnauvalazhar/design-pattern-implementasi-service-layer-di-laravel-cea01f64f57e). You can read it to understand basic service-layer design pattern.
## Installation
1. Clone this repo
1. Run "npm install" in your terminal / cmd
1. Setting .env
1. Run "node server" in your terminal / cmd and check to your postman, or etc
1. Happy hacking!
## Examples
In ./src/app/requests/user.js
```Javascript
const validator = require("validator");
const { toSend } = require("../../core/controls");

module.exports = {
  store: (request) => {
    const { name, email, username, password, otp } = request.body;

    if (!validator.isEmail(email)) {
      return toSend(400, "Email is not valid", false);
    }
    if (
      !validator.isLength(name, {
        min: 1,
        max: 150,
      })
    ) {
      return toSend(400, "Name length max must be 150", false);
    }
    if (
      !validator.isLength(username, {
        min: 5,
        max: 150,
      })
    ) {
      return toSend(400, "Username length max must be 5-150", false);
    }
    const validated = {
      name,
      email,
      username,
      password,
      otp,
    };
    return toSend(200, "Success", validated);
  },
};
```
In ./src/app/services/user.js
```Javascript
module.exports = {
  store: (validatedRequests) => {
    const { name, email, username, password, otp } = validatedRequests;

    console.log("Success uploaded");

    return false;
  },
};
```
In ./src/app/controllers/user.js
```Javascript
module.exports = {
  get: (req, res) => {
    return res.status(200).send({
      name: "Muhamad Adam",
    });
  },
  store: (req, res) => {
    return res.status(200).send({ validated: req.validated });
  },
};
```
In ./src/routers/api/user.js
```Javascript
const { express } = require("../../core/server");
const { useRequest, useService } = require("../../core/controls");

const { get, store } = require("../../app/controllers/user");
const { store: storeRequest } = require("../../app/requests/user");
const { store: storeService } = require("../../app/services/user");

const router = express.Router();
router.get("/", get);
router.post(
  "/", //route
  useRequest(storeRequest), //request, contains validators, sanitations, etc
  useService(storeService), //service, like CRUD database, or file uploads
  store //controller
);

module.exports = router;
```
In ./src/routers/index.js
```Javascript
const { app } = require("../core/server");

const userApiController = require("./api/user");

// api
app.use("/user", userApiController);
```
