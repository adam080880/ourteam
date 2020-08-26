const { app } = require("../core/server");

const userApiController = require("./api/user");

// api
app.use("/user", userApiController);
