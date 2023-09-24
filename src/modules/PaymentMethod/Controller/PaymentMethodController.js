import PaymentMethod from "../../../../Db/models/payment.method.model.js";
import * as MainController   from "../../mainController/MainController.js";

export const addPaymentMethod= async(req,res)=>{
    await PaymentMethod.create({
        name:req.body.name
    })
    return res.json({message:"method added"})
}


