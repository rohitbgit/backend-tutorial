// require("dotenv").config(({path: './env'}))

import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()






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