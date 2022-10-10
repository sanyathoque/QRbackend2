const Joi = require('joi')

//Reg Validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        email: Joi.string().min(1).required().email(),
        password: Joi.string().min(1).required()
    })
    return Joi.validate(data,schema)
}
//login Validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(1).required().email(),
        password: Joi.string().min(1).required()
    })
    return Joi.validate(data,schema)
}
module.exports.loginValidation = loginValidation
module.exports.registerValidation = registerValidation