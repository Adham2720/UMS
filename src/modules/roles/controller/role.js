import roles from '../../../../Db/models/roles.model.js'
export const getroles = async(req,res)=>{
    let x = await roles.findAll()
    if (x==null)
    {
        return ({message:"database is empty"})
    }
    return res.json(x)
}