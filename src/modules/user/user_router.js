import * as usercontroller from './controller/user.js'
//import { auth } from '../../../middleware/auth.js'
import * as MainController from '../mainController/MainController.js'
import * as UserValidator from './controller/UserValidator.js'
import {Router} from 'express'
import User from "../../../Db/models/User.model.js";

const router = Router();

router.get('/getuser',(req,res)=>{
    MainController.getAllRecordsOf(User,res)})
router.get('/getuserById',(req,res)=>{
   MainController.getAllRecordsWithFilter(User, res,req.body)})
router.post('/adduser',(req,res)=>{
    MainController.addRecord(User,req,res,UserValidator.isValidUser)})

router.put('/updateuser',(req,res)=>{
    MainController.updateRecord(User,req,res,UserValidator.isValidUser)
})
router.delete('/deleteuser',(req,res)=>{
    MainController.deleteRecord(User,req,res)})



export default  router;