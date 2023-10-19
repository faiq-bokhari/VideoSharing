import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"
import commentRoutes from "./routes/comments.js"
import videoRoutes from "./routes/videos.js"
import authRoutes from "./routes/auth.js"

const app = express();
dotenv.config()

//connect to mongoDB
const connect = () => {
    console.log(process.env.MONGO);
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to DB");
    })
    .catch((err) => {
        throw err;
    });
};
const port = process.env.PORT || 3001; // choose port


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(express.json()) //temporary outside json requests
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/videos", videoRoutes);


//default Express error handling
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success:false,
        status,
        message,
    });
})

app.listen(port, () => {
    connect();
    console.log(`Server is running on port ${port}`);
});


// const cors = require('cors');
// const bodyParser = require('body-parser');
// const app = express();
// const port = process.env.PORT || 3001; // choose port

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Define routes and APIs here

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// app.get('/vid_share_backend/', (request, response) => {
//     const status = {
//        'Status': 'Running'
//     };
    
//     response.send(status);
//  });

// app.post('/api/register', (req, res) => {
//     // Implement user registration logic here
//     // Use AWS Cognito, a database, or any other authentication solution
//     const { username, password } = req.body;
//     // Validate user data and store it in your database
//     // Return a success or error response
//   });