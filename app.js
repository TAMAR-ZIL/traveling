import express from "express"
import dotenv from "dotenv"

import{connectDB}from"./config/DB.js"
import taxiRouter from "./router/product.js"
import travelRouter from "./router/travel.js"
import userRouter from "./router/user.js"


dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use('api/taxi',taxiRouter);
app.use('api/travel',travelRouter);
app.use('api/user',userRouter);


const port = process.env.PORT 
app.listen(port,() => console.log(`Server is running on port ${port}`));

