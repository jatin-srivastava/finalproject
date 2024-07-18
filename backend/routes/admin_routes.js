import express from 'express'
import { admin,login,campDetail,allfeedback, allcontact, view_camp, DonorAppointment,  donation_update_detail, donation_update, donor_view, receiver_view, search_donor, adminCompose, admininbox } from '../controllers/admin_controller.js'
 

const admin_routes = express.Router()
admin_routes.get("/",admin)
admin_routes.post("/login",login)
admin_routes.post("/campDetail",campDetail)
admin_routes.get("/allfeedback",allfeedback)
admin_routes.get("/allcontact",allcontact)
admin_routes.get("/view_camp",view_camp)
admin_routes.get('/donor_view',donor_view)
admin_routes.post("/blood-donation-appointment",DonorAppointment)
admin_routes.get("/donation_update_detail",donation_update_detail)
admin_routes.post("/donation_update", donation_update);
admin_routes.get("/receiver_view",receiver_view)
admin_routes.get('/search_donor' , search_donor)
admin_routes.post('/adminCompose',adminCompose)
admin_routes.get('/admininbox',admininbox)





export default admin_routes
