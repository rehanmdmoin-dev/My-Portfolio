const StatusCode = require("../utils/statusCode");

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
  if (error) {
    return res.status(StatusCode.BAD_REQUEST).json({
      status: false,
      message: error.details.map((item) => item.message).join(", "),
    });
  }
  req.body = value;
  next();
};

module.exports = validate;
