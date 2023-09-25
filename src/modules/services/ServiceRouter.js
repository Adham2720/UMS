import * as MainController from '../Controller/MainController.js'
import * as ServiceValidator from "./ServiceValidator.js"
import { Router} from 'express'
import ServicesModel from "../../../Db/models/Services.model.js";

const ServiceRouter = Router()
ServiceRouter.get('/Services', (req,res)=>{
   MainController.getAllRecordsOf(ServicesModel,res)}
)

ServiceRouter.get('/ActiveServices',(req,res)=>{
     MainController.getAllRecordsWithFilter(ServicesModel,res, {state:'active'})})

ServiceRouter.post('/Services',(req,res)=>{
    MainController.addRecord(ServicesModel,req,res,ServiceValidator.isValidService)
})

ServiceRouter.put('/Services',(req,res)=>{
    MainController.updateRecord(ServicesModel,req,res,ServiceValidator.isValidService)
})
export default ServiceRouter