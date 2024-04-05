import express from 'express'
import { donor,login,profile,useredit,donormsg } from '../controllers/donor_controller.js'



const donor_routes = express.Router()
donor_routes.get("/",donor)
donor_routes.post("/login",login)
donor_routes.get("/profile",profile)
donor_routes.post("/useredit",useredit)
donor_routes.post('/donorCompose',donormsg)





export default donor_routes
