import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    },
    videoUrl:{
        type: String,
        default: []
    },
    tags:{
        type: [String],
        required: true,
    },

},{timestamps:true});

export default mongoose.model("Video", VideoSchema);