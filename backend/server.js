
import express from "express";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

const app=express();
dotenv.config();
const PORT =process.env.PORT || 5000;
// app.get("/",(req,res)=>{
//     res.send("hello world! aur ky hal h");
// });
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


 app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server running on port ${PORT}`)
});