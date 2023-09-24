import Joi from "joi"


const userSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{8,}$/).required(),
    status: Joi.string().valid('archived','active').required(),
    level: Joi.number().integer().allow(null),
});

export  const isValidUser=(req,res)=>{
    if(req.body.name==null ||
        req.body.email==null ||
        req.body.password==null ||
        req.body.level==null ||
        req.body.status==null){
        return false;
    }else
    if(userSchema.validate(req.body).error){
    return false;
    }
    else
    {
        return  true;
    }
}
