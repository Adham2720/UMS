import Joi from "joi"


const userSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().pattern(/^[a-zA-Z0-9]{8,}$/).required(),
    status: Joi.string().valid('archived','active'),
    level: Joi.number().integer().allow(null).required(),
    roleId:Joi.number().optional()
});

export  const isValidUser=(req)=>{
    return !userSchema.validate(req.body).error;
}