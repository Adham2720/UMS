import { Router } from 'express'
import * as authController from './controller/auth.js'
const router = Router()


router.post("/signUp",authController.signUp)
router.post("/login",authController.login)
router.post("/forgetPassword",authController.forgetPass)




export default router