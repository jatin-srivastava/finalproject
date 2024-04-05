import mongoose from "mongoose";
const campSchema = new mongoose.Schema(
    {
        event_name: { type: String, required: true },
        event_venue: { type: String, required: true },
        event_description: { type: String, required: true },
        event_date: { type: String, required: true }
    }
)
const campModel = mongoose.model("campDetail",campSchema)
export default campModel