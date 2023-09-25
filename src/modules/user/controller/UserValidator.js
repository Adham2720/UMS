import Joi from "joi"


const userSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    status: Joi.string().valid('archived','active'),
    level: Joi.number().integer().allow(null).required(),
});

export  const isValidUser=(req,res)=>{
    return !userSchema.validate(req.body).error;
}