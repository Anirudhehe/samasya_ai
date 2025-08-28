import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { err } from "inngest/types"

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB is connected");
        app.listen(PORT,()=>{
            console.log("Server running on Port:",PORT);
        })

    })
    .catch((err)=>{
        console.error("MongoDB error: ",err)
    })