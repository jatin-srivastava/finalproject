import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        rating:{type:String,required:true},
        remark:{type:String,required:true},


    }
)
const FeedbackModel=mongoose.model("Feedback",feedbackSchema)
export default FeedbackModel