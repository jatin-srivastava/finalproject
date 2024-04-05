import mongoose from "mongoose"
const messageSchema = new mongoose.Schema(
    {
        senderId:{type: String, required: true},
        receiverId:{type: String, required: true},
        subject:{type: String, required: true},
        message:{type: String, required: true},
        date:{type: String, required: true}
        
    }
)
const messageModel = mongoose.model("messageDetail",messageSchema)
export default messageModel