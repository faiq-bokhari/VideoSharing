import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs";
import { createError } from "../error.js";

export const signup = async (req, res, next)=>{
    try{
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //create new user, password is hashed
        const newUser = new User({...req.body, password: hash});

        await newUser.save(); //mongoDB save
        res.status(200).send("User created");

    }catch(err){
        next(err)
    }
}

export const signin = async (req, res, next)=>{
    try{

        //check if user exists
        const user = await User.findOne({name:req.body.name});
        if(!user) return next(createError(404, "User not found!"));

        //check if password is valid with hashed password
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect) return next(createError(404, "Invalid Credentials!"));

    }catch(err){
        next(err)
    }
}