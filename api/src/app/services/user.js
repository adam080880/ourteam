module.exports = {
  store: (validatedRequests) => {
    const { name, email, username, password, otp } = validatedRequests;

    console.log("Success uploaded");

    return false;
  },
};
