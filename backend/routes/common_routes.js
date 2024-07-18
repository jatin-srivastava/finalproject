import express from "express";
import { home,  Contact, Receiver,Donor,upcoming_event,searchdonor,showStory } from "../controllers/common_controllers.js";


const common_routes = express.Router();
common_routes.get("/", home)

common_routes.post("/Contact", Contact)
common_routes.post('/Receiver', Receiver)
common_routes.post('/Donor', Donor)
common_routes.get('/upcoming_event',upcoming_event)
// common_routes.get('/donordetail',donordetail)
common_routes.get("/searchdonor",searchdonor)
common_routes.get("/showStory",showStory)


export default common_routes