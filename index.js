import express from "express"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import ActorRoutes from "./router/actors.js"
import MovieRoutes from "./router/movies.js"
import ProducerRoutes from "./router/producers.js"
 dotenv.config();
const app=express();
const Port=4000;
app.use(express.json());
const connect=()=> {
    mongoose.connect(process.env.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  mongoose.set('strictQuery', false))
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
  };
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/api/actor",ActorRoutes)
app.use("/api/movies",MovieRoutes)
app.use("/api/producers",ProducerRoutes)
app.listen(Port,async()=>{
     await connect();
    await console.log(`app is running on ${Port}`)
})