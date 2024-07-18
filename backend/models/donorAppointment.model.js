import  mongoose  from "mongoose";
const appointmentSchema = new mongoose.Schema(
    {
        date:{type:String,required:true},
        message:{type:String,required:true},
        venue:{type:String,required:true}
    }
)
const appointmentModel = mongoose.model("DonorAppointment",appointmentSchema)
export default appointmentModel