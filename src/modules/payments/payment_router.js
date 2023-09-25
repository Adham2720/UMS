import * as paymentHistoryController from "./controller/paymentController.js"
import * as MainController from '../mainController/MainController.js'
import * as PaymentValidator from './controller/paymentValidator.js'
import {Router} from 'express'
import payment from "../../../Db/models/payment.model.js";
import paymentModel from "../../../Db/models/payment.model.js";
const  router = Router()
import {sequelize} from "../../../Db/connection.js";

sequelize.query('ALTER TABLE "payments" DROP CONSTRAINT "payments_UserId_ServiceId_key";')   .then(() => {
     console.log('Successfully deleted constraint');
 })
     .catch((error) => {
         console.error('Failed to delete constraint', error);
     });
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