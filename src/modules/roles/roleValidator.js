import Joi from "joi";

const roleSchema = Joi.object({
    role_id:Joi.number().optional(),
    name: Joi.string().required(),
});

export const isValidRole= (req)=>{
    return !roleSchema.validate(req.body).error;;
}