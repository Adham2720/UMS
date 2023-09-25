import * as MainController from "../mainController/MainController.js"
import {Router} from "express";
import {BankCard} from "../../../Db/models/bankCard.model.js";
import * as BankCardValidator from "./BankCardValidator.js"
const router =Router();
router.get('/bankCards',(req,res)=>{
    MainController.getAllRecordsOf(BankCard,res)
})
router.get('/bankCardsOfUser',(req,res)=>{
    MainController.getAllRecordsWithFilter(BankCard,res,req.body)
})

router.post('/bankCard',(req,res)=>{
    MainController.addRecord(BankCard,req,res,BankCardValidator.isValidCard)
})


export default router;