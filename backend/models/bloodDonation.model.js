import mongoose from "mongoose";

const bloodDonationSchema = new mongoose.Schema({
    senderId: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    age: { type: Number, required: true },
    bloodGroup: { type: String, required: true },
    unit: { type: String, default: null },
    date: { type: Date, default: null }
});

const bloodDonationModel = mongoose.model("bloodDonation", bloodDonationSchema);

export default bloodDonationModel;
