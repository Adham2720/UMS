export const isValidPaymentMethod=(req,res)=>{
    return req.body.name != null;
}