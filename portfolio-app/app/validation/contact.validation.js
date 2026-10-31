const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(60).required(),
  email: Joi.string().trim().email().required(),
  subject: Joi.string().trim().max(100).allow("").optional(),
  message: Joi.string().trim().min(10).max(1000).required(),
});

module.exports = { contactSchema };
