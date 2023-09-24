import * as MainController from '../mainController/MainController.js'
import {Router} from 'express'
import RolesModel from "../../../Db/models/roles.model.js";
const router = Router();
router.get('/getrole',(req,res)=>{
    MainController.getAllRecordsOf(RolesModel,res)
})
export default  router;