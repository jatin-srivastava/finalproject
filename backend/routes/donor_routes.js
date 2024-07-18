import express from 'express'
import { donor,login,profile,useredit,donormsg, donorinbox, story, bloodDonation, appointment_view, donation_form, donor_history} from '../controllers/donor_controller.js'



const donor_routes = express.Router()
donor_routes.get("/",donor)
donor_routes.post("/login",login)
donor_routes.get("/profile",profile)
donor_routes.post("/useredit",useredit)
donor_routes.post('/donorCompose',donormsg)
donor_routes.get('/donorinbox',donorinbox)
donor_routes.post('/share_story',story)
donor_routes.post('/bloodDonation',bloodDonation)
donor_routes.get('/appointment_view',appointment_view)
donor_routes.get("/donation_form",donation_form)
donor_routes.get("/donor_history",donor_history)






export default donor_routes

