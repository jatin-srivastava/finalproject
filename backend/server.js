import express from "express";
import dotenv from "dotenv"
import cors from 'cors'
import common_routes from "./routes/common_routes.js";
import admin_routes from "./routes/admin_routes.js";
import connect_db from "./database/db.js"
import donor_routes from "./routes/donor_routes.js";
import receiver_routes from "./routes/receiver_routes.js";


//create server using express
const serverApp = express()
//configuring env file with server
dotenv.config()
serverApp.use(cors()) //for allowing cross-origin requests

//connecting to the database
connect_db()


serverApp.use(express.json())
serverApp.use(express.urlencoded())
serverApp.use(express.static('public'))
serverApp.use("/", common_routes)
serverApp.use("/admin", admin_routes)
serverApp.use("/donor", donor_routes)
serverApp.use("/receiver", receiver_routes)


let PORT = process.env.PORT || 4000;

serverApp.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});
