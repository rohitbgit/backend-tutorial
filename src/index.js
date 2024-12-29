// require("dotenv").config(({path: './env'}))

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectDB().then(()=>{
    try {
        app.listen(process.env.PORT || 8000,()=>{
            console.log(`Server running at port: ${process.env.PORT}`);        
        })
    } catch (error) {
        app.on("error",(error)=>{
            console.log(`Server failed due to : ${error}`);
        })
    }
    
}).catch((error)=>{
    console.log("MongoDB connection failed !! :",error);
    
})






// const app = express();

// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.error("error",(error)=>{
//             console.log("Error should be ",error);
//             throw error
//         });
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listen port : ${process.env.PORT}`);
//         });
//     }catch(error){
//         console.error("Error",error)
//     }
// })()