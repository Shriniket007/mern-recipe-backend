import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 3001;

import { userRouter } from './src/routes/users.js'

import { recipesRouter } from "./src/routes/recipes.js";



const app = express();

app.use(express.json());

app.use(cors());  //making api reuest from frontend



app.use("/auth", userRouter);

app.use("/recipes", recipesRouter);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
});



app.listen(PORT, () => {
    console.log("server started");
})

