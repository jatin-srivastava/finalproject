import express from 'express'
import { admin,login,campDetail,allfeedback, allcontact, view_camp } from '../controllers/admin_controller.js'


const admin_routes = express.Router()
admin_routes.get("/",admin)
admin_routes.post("/login",login)
admin_routes.post("/campDetail",campDetail)
admin_routes.get("/allfeedback",allfeedback)
admin_routes.get("/allcontact",allcontact)
admin_routes.get("/view_camp",view_camp)



export default admin_routes
