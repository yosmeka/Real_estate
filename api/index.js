import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('MongoDB Connected')
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());
app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
})
app.use("/api/user", userRouter);
app.use("/api/auth",authRouter)