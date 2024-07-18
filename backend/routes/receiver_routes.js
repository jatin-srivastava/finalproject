import express from "express";
import {receiver , login , profile, receiveredit,addFeedback,receivermsg, searchDonor, receiverinbox} from "../controllers/receiver_controler.js";





const receiver_routes = express.Router()
receiver_routes.get('/', receiver)
receiver_routes.post("/login",login)
receiver_routes.get("/profile",profile)
receiver_routes.post("/receiveredit",receiveredit)
receiver_routes.post("/addFeedback", addFeedback)
receiver_routes.post('/receiverCompose',receivermsg)
receiver_routes.get('/searchDonor',searchDonor)
receiver_routes.get("/receiverinbox",receiverinbox)

export default receiver_routes