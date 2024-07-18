import mongoose from "mongoose";

const storySchema = new mongoose.Schema
    (
        {
            donorId: { type: String, required: true },
            title: { type: String, required: true },
            content: { type: String, required: true },
            date: { type: String, required: true }
        }
    )
const storyModel = mongoose.model("story", storySchema)
export default storyModel
