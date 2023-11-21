import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import coinRouter from './routers/coin.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router'; 
import { dbConnect } from './configs/database.config';
dbConnect();


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/api/coins", coinRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
