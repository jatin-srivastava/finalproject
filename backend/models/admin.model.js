import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        admin_id:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        admin_pass:{
            type:String,
            required:true
            // min:7,
            // max:12
        }
        
    }
)

const adminModel=mongoose.model("adminDetail",adminSchema)
export default adminModel