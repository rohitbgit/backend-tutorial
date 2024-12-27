import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`Mongodb connected : ${res.connection.host}`);
        
    } catch (error) {
        console.log("Connection error : ", error);
        process.exit(1)
        
    }
}

export default connectDB