import FeedbackModel from "../models/feedback.models.js";
import contactModel from "../models/contact.models.js";
import receiverModel from "../models/receiver.models.js";
import donorModel from '../models/donor.models.js'
import campModel from "../models/campDetail.model.js"







export const home = (request, response) => {
    response.send("This is response from server to home page");
}




export const addFeedback = async (request, response) => {
    const feedbackObject = request.body
    const { name, email, remark, rating } = feedbackObject
    try {
        const FeedbackDoc = new FeedbackModel({
            name: name, email: email,
            remark: remark, rating: rating
        })
        await FeedbackDoc.save()
        response.send("thankyou for your feedback")
    }
    catch (err) {
        console.log('err' + err);
    }

    // console.log(feedbackObject);
}


export const Donor = async (request, response) => {
    const donorObject = request.body
    const { id, password, name, email, phone, gender, age, bgr, city } = donorObject
    try {
        const donorDoc = new donorModel({
            id: id,
            password: password,
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            age: age,
            bgr: bgr,
            city: city
        })
        await donorDoc.save()
        response.send("thankyou for register")
    }
    catch (err) {
        console.log('err' + err);
    }
}



export const Contact = async (request, response) => {
    const contactObject = request.body
    const { name, email, phone, query } = contactObject
    try {
        const contactDoc = new contactModel({
            name: name,
            email: email,
            phone: phone,
            query: query,
        })
        await contactDoc.save()
        response.send("thankyou for contacting me")
    }
    catch (err) {
        console.log('err' + err);
    }
}



export const Receiver = async (request, response) => {
    const receiverObject = request.body
    const { id, password, name, email, phone } = receiverObject
    try {
        const receiverDoc = new receiverModel({
            id: id,
            password: password,
            name: name,
            email: email,
            phone: phone
        })
        await receiverDoc.save()
        response.send("thankyou for contacting me")
    }
    catch (err) {
        console.log('err' + err);
    }
}


export const upcoming_event = async (request, response)=>{
    try{
        const eventData = await campModel.find()
        if (eventData != null)
        response.send(eventData)
    else 
    response.send("no event yet")
    }
    catch (err){
        console.log("err"+ err);
    }
}


// export const donordetail = async (request,response)=>{
//     try
//     {
//         const donorData = await donorModel.find().limit(10)
//         if (donorData != null)
//         response.send(donorData)
//         else
//         response.send("no donor data")
//     }
//     catch(err)
//     {
//         console.log("err"+err);
//     }
// }

export const searchdonor = async (request,response)=>{
    let donorData = {} 
    try{
        const {bgr , city} = request.query
        console.log("in server" + bgr ,city);
        if (bgr){
            const regex = new RegExp(bgr,'i');
            donorData = await donorModel.find({bgr:{ $regex: regex}})
        }
        else if (city)
        {
            const regex1 = new RegExp (city,'i')
            donorData = await donorModel.find({city:{$regex :regex1}})
        }
        else {
            donorData = await donorModel.find().limit(10)
        }
        response.send({message:"success",donor_data:donorData})
    }
    catch(err){
        console.log(err);
    }
}
  