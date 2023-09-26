// Implements All CRUD Operations

const validateEmptyAndSend = (records,res)=>{
    if(records.length==0){
        res.send('Empty Database/Record list')
    }else{
        res.json(records)
    }
}

export const getAllRecordsOf= async (model,res)=>{
    const records =await  model.findAll()
    validateEmptyAndSend(records,res)
}
export const getAllRecordsWithFilter = async (model ,res,options )=>{
    const where ={
        where: options
    }
    const records = await model.findAll(where)

    validateEmptyAndSend(records,res)
}
export const addRecord= async (model,req,res,schema)=>{
    const error = await schema.validate(req.body).error;
    if(error){
        return res.json(error);
    }else{
        try {
            await model.create(req.body);
            return  res.send('Record Created Successfully')
        } catch (error) {
            return  res.send( error.errors) ;
        }
    }

}
export const updateRecord= async(model,req,res,schema)=>{
    const where ={
        where: {
            id:req.body.id
        }
    }
    const validation = schema.validate(req.body).error;
    if(!validation){
        try{
            const rowsUpdate = await model.update(req.body,where)
           if(rowsUpdate!=0){
               return res.send(`Updated Succesfully : ${rowsUpdate}`)}else{
               return  res.send('no rows Found ')
           }
        }
        catch (error){
            throw error;
        }
    }else{
        return res.send(validation)
    }
}
export const deleteRecord= async(model,req,res)=>{


    if(req.body.id==null){
        return res.send('no Id sent')
    }else{
        const where ={
            where: {
                id:req.body.id
            }
        }
       const deletedRows=  await model.destroy(where)
        if(deletedRows!=0){
           return  res.send('deleted Succesfully')
        }else{
            return  res.send('No Rows Found with that id ')

        }

    }
}



