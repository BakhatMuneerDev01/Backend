import express from "express";
import cors from "cors"


const app = express();

app.use(cors({
    origin: process.env.CORSE_ORIGINE
}))

app.use(express.json({ limit: "15kb" }));  // Limit JSON size to 15kb
app.use(express.urlencoded({ extended: true, limit: "15kb" }))
app.use(express.static("public"))

// import routes
import  userRouter  from "../src/routes/user.route.js"

// routes
app.use("api/v1/users", userRouter)


export { app };