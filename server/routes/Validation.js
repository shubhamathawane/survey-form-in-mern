const Joi = require("@hapi/joi");

const registrationValidation = (data) => {
  const schemas = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    email: Joi.string().min(7).required().email(),
    mobile: Joi.number().min(10).required(),
  });

  return schemas.validate(data);
};

const loginValidation = (data) => {
  const schemas = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(4).required(),
  });

  return schemas.validate(data);
};

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;