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
