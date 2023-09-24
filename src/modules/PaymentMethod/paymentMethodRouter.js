import * as paymentController from './Controller/PaymentMethodController.js'
import {Router} from 'express'
import User from "../../../Db/models/User.model.js";
import PaymentMethod from "../../../Db/models/payment.method.model.js";
import * as MainController from '../mainController/MainController.js'
import * as Validator from './Controller/PaymentMethodValidator.js'
export const paymentMethodRouter = Router()

paymentMethodRouter.get('/PaymentMethod',(req,res)=>{
 MainController.getAllRecordsOf(PaymentMethod,res)})

paymentMethodRouter.post('/paymentMethod',(req,res)=>{
  MainController.addRecord(PaymentMethod,req,res,Validator.isValidPaymentMethod)})
export default paymentMethodRouter;