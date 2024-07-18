import contactModel from "../models/contact.models.js";
import receiverModel from "../models/receiver.models.js";
import donorModel from '../models/donor.models.js'
import campModel from "../models/campDetail.model.js"
import storyModel from '../models/story.model.js'







export const home = (request, response) => {
    response.send("This is response from server to home page");
}


export const Donor = async (request, response) => {
    const donorObject = request.body
    const { id, password, name, email, phone, gender, age, bloodGroup, city } = donorObject
    try {
        const donorDoc = new donorModel({
            id: id,
            password: password,
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            age: age,
            bloodGroup: bloodGroup,
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
        const {bloodGroup , city} = request.query
        console.log("in server" + bloodGroup ,city);
        if (bloodGroup){
            const regex = new RegExp(bloodGroup,'i');
            donorData = await donorModel.find({bloodGroup:{ $regex: regex}})
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

export const showStory = async (request, response)=>{
    try{
        const eventData = await storyModel.find()
        if (eventData != null)
        response.send(eventData)
    else 
    response.send("no story yet")
    }
    catch (err){
        console.log("err"+ err);
    }
}
  