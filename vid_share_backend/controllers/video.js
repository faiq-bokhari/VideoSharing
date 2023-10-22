import { createError } from "../error.js";
import Video from "../models/Video.js";

export const addVideo = async (req, res, next)=>{
    const newVideo = new Video({userId:req.user.id, ...req.body});
    try{
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    }catch(err){
        next(err);
    }
}

export const updateVideo = async (req, res, next)=>{
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404, "Video not found!"));
        if(req.user.id == video.userId){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },
            {new: true});

            res.status(200).json(updatedVideo);
        } 
    }catch(err){
        return next(createError(403, "You can only update your own video!"));
    }
}

export const deleteVideo = async (req, res, next)=>{
    try{
        const video = await Video.findById(req.params.id);
        if(!video) return next(createError(404, "Video not found!"));
        if(req.user.id == video.userId){
            await Video.findByIdAndDelete(req.params.id);

            res.status(200).json("Video has been deleted!");
        } 
    }catch(err){
        return next(createError(403, "You can only delete your own video!"));
    }
}

export const getVideo = async (req, res, next)=>{
    try{
        const video = await Video.findById(req.params.id);        
        res.status(200).json(video);

    }catch(err){
        next(err);
    }
}