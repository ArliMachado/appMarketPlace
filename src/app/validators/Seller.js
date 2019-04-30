const Joi = require('joi')

module.exports = {
  body: {
    ad: Joi.string().required(),
    purchase: Joi.string().required()
  }
}
