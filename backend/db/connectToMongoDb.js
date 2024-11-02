import mongoose from "mongoose";

const connectToMongoDb=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connect to mango db");
    }catch(error){
        console.log("error connecting to mongo ",error.message);
    }
};
export default connectToMongoDb;