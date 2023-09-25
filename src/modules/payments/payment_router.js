import * as MainController from '../Controller/MainController.js'
import * as PaymentValidator from './paymentValidator.js'
import {Router} from 'express'
import paymentModel from "../../../Db/models/payment.model.js";




const  router = Router()
router.get('/getPaymentHistory', (req,res)=>{
     MainController.getAllRecordsWithFilter(paymentModel,res,req.body)
})

router.get('/getAllPaymentHistory',(req,res)=>{
     MainController.getAllRecordsOf(paymentModel,res)
})
router.post('/addPaymentHistory',(req,res)=>{
     MainController.addRecord(paymentModel,req,res,PaymentValidator.isValidPendingPayment)
})

router.put('/confirmPayment',(req,res)=>{
     MainController.updateRecord(paymentModel,req,res,PaymentValidator.isValidConfirmedPayment)
})
export default router;