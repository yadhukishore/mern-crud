import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/instance.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connecte to MongoDB');
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3000,()=>{
    console.log(`Server is running on port 3000!!!`)
});

app.use("/api/instance",userRouter);