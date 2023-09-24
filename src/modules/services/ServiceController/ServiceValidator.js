
import Joi from "joi";

const serviceSchema = Joi.object({
    id:Joi.number().optional(),
    name: Joi.string().required(),
    fees: Joi.number().required(),
    validUntilDate: Joi.date().allow(null).optional(),
    state: Joi.string().valid('active', 'locked').required(),
});
export const isValidService = (req,res)=>{
     if  (serviceSchema.validate(req.body).error)
    {
        return false;
    }else {
        return true;
    }



}