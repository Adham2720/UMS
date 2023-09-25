import User from "../../../Db/models/User.model.js";
import Service from "../../../Db/models/Services.model.js";

export const isValidPendingPayment = async(req,res)=>{
    if(req.body.UserId==null){
        return  false
    }
    if(req.body.ServiceId==null){
        return false
    }
    const service = await Service.findOne({ where: { id: req.body.ServiceId} });
    const user = await User.findOne({ where: { id: req.body.UserId } });

    if(user==null|| service == null){
        return  false }
    else{
    return true;}
}

export const isValidConfirmedPayment = (req,res)=>{
    if(req.body.id==null|| req.body.PaymentMethodId==null){
        return false
    }else return true
}