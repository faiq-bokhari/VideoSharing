import express from "express";
import {  } from "../controllers/user.js";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

//Create New User
router.post("/signup", signup )
//Sign in
router.post("/signin", signin)
//Google Auth
router.post("/google", )


export default router;