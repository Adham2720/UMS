import User from '../../../../Db/models/User.model.js'
 
export const getUsers = async(req,res)=>{
    let users = await User.findAll({where:{status: 'active'}})
    if (users==null)
    {
        return ({message:"database is empty"})
    }
    return res.json(users)
}
export const getUsersById = async(req,res)=>{
  let users = await User.findAll({where:{id: req.body.id}})
  if (users==null)
  {
      return ({message:"database is empty"})
  }
  return res.json(users)
}

export const addUser = async(req,res)=>{
    await User.create({
        name:req.body.name,
        email : req.body.email,
        password : req.body.password,
        level: req.body.level,
        status: req.body.status
    })
    return res.json({message:"done"})
}
export const deleteUser = async(req,res)=>{
    await User.destroy({
        where: {
          name: req.body.name
        }
      });
      return res.json({message:"done"})
}
export const updateUser = async(req,res)=>{
    await User.update({
       status: req.body.newStatus,
       name: req.body.name,
       email:req.body.email,
       level:req.body.level
     }, {
        where: {
          id: req.body.id
        }
      });   
      return res.json({message:"user updated"})  
}

