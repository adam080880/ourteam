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
