// import jwt from 'jsonwebtoken';
// import userModel from '../Db/models/User.model.js';



// export const auth = async (req,res,next)=>{

//     const {token}=req.headers;
//     console.log({token});

//     if(!token){
//         return res.json({message:"Token is Required"})
//     }

//     const decoded = jwt.verify(token ,process.env.SIGNATURE)
//     console.log(decoded);

//     if(!decoded.id || !decoded.isLoggedIn){
//         return res.json({message:"In-valid token"})
//     }
//     const authUser = await userModel.findById(decoded.id).select("name email")
//     if(!authUser){
//         return res.json({message:"Not Registerd Account"})
//     }
//     req.user = authUser

//     return next()
// }