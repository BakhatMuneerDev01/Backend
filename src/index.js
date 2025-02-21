import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

connectDB()
.then(
    app.listen(process.env.PORT || 5000, (req, res)=>{
        console.log(`app is running at PORT :: ${process.env.PORT}`)
    })
)
.catch(
    (error) => {
        console.error("Faild to talk with mongodb", error)
    }
)