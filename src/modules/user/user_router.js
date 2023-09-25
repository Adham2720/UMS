import * as MainController from '../Controller/MainController.js'
import * as UserValidator from './UserValidator.js'
import {Router} from 'express'
import User from "../../../Db/models/User.model.js";

import {sequelize} from "../../../Db/connection.js";

const router = Router();
sequelize.query('ALTER TABLE "payments" DROP CONSTRAINT "payments_UserId_ServiceId_key";')   .then(() => {
    console.log('Successfully deleted constraint');
})
    .catch((error) => {
        console.error('Failed to delete constraint', error);
    });
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