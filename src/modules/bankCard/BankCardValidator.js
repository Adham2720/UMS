import Joi from "joi"


const bankCardSchema = Joi.object({
    UserId:Joi.number().required(),
    holderName: Joi.string().required(),
    expirationDate: Joi.date().required(),
    cardNumber: Joi.string().creditCard().required(),
});

export const isValidCard = (req,res,data)=>{
return !bankCardSchema.validate(data).error;
}