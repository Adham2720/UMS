
import userModel from '../../../../Db/models/User.model.js'
import { generateToken } from '../../../utils/GenerateToken.js';
import { compare, hash } from '../../../utils/HashAndCompare.js';
import crypto from'crypto';

import nodemailer from"nodemailer";

function generateRandomPassword(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
  
    const randomBytes = crypto.randomBytes(length);
    for (let i = 0; i < length; i++) {
      const randomIndex = randomBytes[i] % charset.length;
      password += charset[randomIndex];
    }
  
    return password;
  }
  

export const signUp =async(req,res,next)=>{
    try {
        const {name,email,password,roleId,level,status}=req.body
        const checkUser =  await userModel.findOne({where: {email:email}})
        if(checkUser){
            return res.json({message : "Email Exist"})
        }
        const hashPassword = hash({
            plainText :password
        })
        const user =  await userModel.create({name,email,password:hashPassword,status,roleId,level})
        return res.json({message : "User is added"})
    } catch (error) {
        return res.json({message : "Catch Error",error})
    }
}

export const login =async(req,res,next)=>{
    try {
        const {email,password}=req.body
        console.log({email,password});

        const checkUser =  await userModel.findOne({ where: {email:email}})
        if(!checkUser){
            return res.json({message : "Email not Exist"})
        }
        console.log({p:checkUser.password,password});
 
        const matchPassword = compare({  plainText :password, hashValue : checkUser.password})
       
        if(!matchPassword){
            return res.json({message : "In-valid Password"})
        }


        return res.json({checkUser})
    } catch (error) {
        return res.json({message : "Catch Error",error,stack:error.stack})
    }
}

export const forgetPass = async(req,res,next)=>{
 

const randomPassword = generateRandomPassword(8);


    try {
        const {email}= req.body;
        const checkUser =  await userModel.findOne({ where: {email:email}})
        if(!checkUser){
            return res.json({message : "Email not Exist"})
        }


        const hashPassword = hash({
            plainText :randomPassword
        })
        checkUser.update({ password: hashPassword });   

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: "adhammaged47@gmail.com",
              pass: "ormrcmmtdirxgncj",
            },
          });
          async function sendmail(randomPassword) {
            const info = await transporter.sendMail({
              from: {address: "adhammaged47@gmail.com"}, // sender address
              to: email, // list of receivers
              subject: "Reset password ✔", // Subject line
              text: `Your new password is: ${randomPassword}`, // plain text body
              html: `<b>Your new password is: ${randomPassword}</b>`,
            //   context: {${randomPassword}} // html body
            });
          }
          sendmail(randomPassword);
        return res.json({randomPassword})
    }
catch (error) {
        console.log(error)
    }
}
