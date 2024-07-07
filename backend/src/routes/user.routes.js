import {Router} from 'express';
import { getAuthStatus, loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';



const router = Router(); 
router.route("/register")
            .post(registerUser)
router.route("/login")
            .post(loginUser)
router.route("/logout")
            .post(verifyJWT,logoutUser)
router.route("/refresh-token")
            .post(refreshAccessToken)  
router.route("/auth-status" )
            .get(verifyJWT,getAuthStatus)    
            

export default router;