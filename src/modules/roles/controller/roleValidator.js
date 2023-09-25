export const isValidRole= (req,res)=>{
    return req.body.name != null;
}