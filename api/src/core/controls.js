const controls = {
  useRequest: (requestValidator) => (req, res, next) => {
    const validator = requestValidator(req);

    if (!validator.validated) {
      return res.status(validator.code).send(validator);
    } else {
      req.validated = validator.validated;
      next();
    }
  },
  useService: (serviceRun) => (req, res, next) => {
    const service = serviceRun(req.validated);

    if (!service) {
      return res.status(500).send(controls.toSend(500, "Error server", false));
    } else {
      req.serviceResult = service;
      next();
    }
  },
  toSend: (code, msg, validated = false, opt = {}) => {
    return {
      code,
      msg,
      validated,
      ...opt,
    };
  },
};

module.exports = controls;
