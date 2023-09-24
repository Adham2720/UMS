import {DataTypes, DATE, Model as Payment} from "sequelize";
import paymentModel from "../../../../Db/models/payment.model.js";

export const confirmPayment =  async ( req,res)=>{
    const paymentfound = await paymentModel.findOne({ where: { id: req.body.id } });
    if(paymentfound==null){
        return res.send('payment does not exist')
    }
    paymentfound.state='successful'
    paymentfound.PaymentMethodId=req.body.PaymentMethodId
    await paymentfound.save()
    res.send('created Succesfully')

}