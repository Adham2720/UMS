import Service from "../../../../Db/models/Services.model.js";
import ServicesModel from "../../../../Db/models/Services.model.js";

export const getAllServices = async (req,res)=>{


    const allServices= await Service.findAll()
    console.log('/////////////////////')
    console.log(allServices)
    if(allServices.length==0){
        res.send('No Services in the Database').status(400)
    }
    else {
        res.json(allServices)
    }
}

export const getActiveServices = async (req,res)=>{


    const allActiveServices= await Service.findAll({
        where:{
            state:'active'
        }
    })
    if(allActiveServices.length==0){
        res.send('No Active Services Found').status(400)
    }
    else {
        res.json(allActiveServices)
    }
}


export const addService = async(req,res)=>{
    var validUntilDate = null
    if(req.body.validUntilDate!=null){
        validUntilDate=req.body.validUntilDate
    }
    var fees = null
    if(req.body.fees!=null){
        fees=req.body.fees
    }

    var state ='active'
    if(req.body.state!=null){
        state =req.body.state
    }
    await ServicesModel.create({
        name:req.body.name,
        fees:fees,
        validUntilDate:validUntilDate,
        state:state
    })
    return res.json({message:"service added"})

}

export const updateService= async (req,res)=>{

    const service = await ServicesModel.findOne({
        where:{
            id:req.body.id
        }
    })
    console.log(service)
    console.log(req.body)
    const updateserv= async (service)=>{
        if(service){
            console.log('////')
            console.log(service)
            service.fees = fees
            service.name = req.body.name
            service.validUntilDate=validUntilDate
            service.state=req.body.state
            await service.save()
            res.send('updated succesfully')
        }else {
            res.send('No service Found').status(400)
        }
    }
    updateserv(service)

}
