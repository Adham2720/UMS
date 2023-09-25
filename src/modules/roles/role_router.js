import * as MainController from '../mainController/MainController.js'
import {Router} from 'express'
import RolesModel from "../../../Db/models/roles.model.js";
const router = Router();
router.get('/getrole',(req,res)=>{
    MainController.getAllRecordsOf(RolesModel,res)
})
const isValidRole= (req,res)=>{
    return req.body.name != null;
}
router.post('/addRole',(req,res)=>{
    MainController.addRecord(RolesModel,req,res,isValidRole)
})
export default  router;