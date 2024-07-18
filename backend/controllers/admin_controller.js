

import adminModel from "../models/admin.model.js"
import campModel from "../models/campDetail.model.js"
import FeedbackModel from "../models/feedback.models.js"
import contactModel from "../models/contact.models.js"
import bloodDonationModel from "../models/bloodDonation.model.js"
import appointmentModel from "../models/donorAppointment.model.js"
import receiverModel from "../models/receiver.models.js"
import donorModel from "../models/donor.models.js"
import messageModel from "../models/message.models.js"



export const admin = (request, response) => {
    response.send("this is admin page....")
}

// for admin login
export const login = async (request, response) => {
    try {
        let account_Info = request.body
        console.log(account_Info);
        const { id, password } = account_Info

        const admin_data = await adminModel.findOne({admin_id:id})
        console.log(admin_data);

        if (admin_data != null) 
        {
            if (admin_data.admin_pass == password)
             {
                // response.send('admin found')
                response.send({code:200,message:"adminhome",token:admin_data.admin_id})
            }
            else
             {
                response.send({ code: 404, message: 'password err' })
            }

        }

        else 
        
        {
            response.send("Invalid credential")
        }

    }
    catch (err) {
        console.log('err' + err);
    }

}


export const campDetail = async (request, response) => {
    const CampObject = request.body
    const { event_name, event_venue, event_description, event_date } = CampObject
    try {
        const campDoc = new campModel({
            event_name: event_name,
            event_venue: event_venue,
            event_description: event_description,
            event_date: event_date
        })
        await campDoc.save()
        response.send("thankyou for creating Camp Detail")
    }
    catch (err) {
        console.log('err' + err);
    }
}

// all feedback code start

export const allfeedback = async (request, response)=>{
    try{
        const feedbackData = await FeedbackModel.find()
        if (feedbackData != null)
        response.send(feedbackData)
    else 
    response.send("no feedback yet")
    }
    catch (err){
        console.log("err"+ err);
    }
}

// all contact code start
export const allcontact = async (request,response)=>{
    try
    {
        const contactData = await contactModel.find()
        if (contactData != null)
        response.send(contactData)
        else
        response.send("no contact yet")
    }
    catch(err)
    {
        console.log("err"+err);
    }
}

export const view_camp = async (request,response)=>{
    try{
        const campData = await campModel.find()
        if (campData != null)
        response.send(campData)
        else
        response.send("no camp data yet")
    }
    catch(err)
    {
        console.log("err"+err);
    }
}


export const DonorAppointment = async (request,response)=>{
    const appointmentObject = request.body
    const {date ,message,venue} = appointmentObject
    try{
        const appointmentDoc = new appointmentModel({
            date:date,
            message:message,
            venue:venue
        })
        await appointmentDoc.save()
        response.send("thankyou for giving appointment")

    }
    catch(err)
    {
        console.log(err);
    }
}

// donation update detail


export const donation_update_detail = async (request, response) => {
    try {
        const updateData = await bloodDonationModel.find();

        if (updateData !== null) {
            response.send(updateData);
        } else {
            response.send("No donation update details available.");
        }
    } catch (err) {
        console.log(err);
        response.status(500).send("Internal Server Error");
    }
};

//this is donation update 

export const donation_update = async (request, response) => {
    try {
        const update_data = request.body;

        const { unit, date,id } = update_data;
        const update_doc = {
            $set: {
                unit: unit,
                date: date
            }
        };
        console.log(update_doc);
        const filter_condition = { _id:id };
        const status = await bloodDonationModel.updateOne(filter_condition, update_doc);
        console.log(status);
        response.send(status);
    } catch (err) {
        console.log(err);
    }
};

// Donor view 

export const donor_view = async (request,response)=>{
    try{
        const donor_view_data = await donorModel.find()
        if (donor_view_data!=null)
        response.send(donor_view_data)
    else
    response.send("no donor")

    }
    catch(err){
        console.log(err);
    }
}

// this is receiver view

export const receiver_view = async(request,response)=>{
    try{
        const receiver_view_data = await receiverModel.find()
        if (receiver_view_data!= null)
        response.send(receiver_view_data)
    else{
        response.send("no receiver")
    }

    }
    catch(err){
        console.log(err);
    }
}


export const search_donor = async (request ,response)=>{
    let donorData = {}
    try
    {
        const {phone}= request.query
        console.log("in server" + phone);
        donorData = await bloodDonationModel.find({phone:phone})
        response.send({message:"success",donor_data:donorData})
    }
    catch(err){
        console.log(err);
    }
}


    
export const adminCompose = async (request, response) => {
    const donormsgObject = request.body
    const {senderId,receiverId,subject,message,date} = donormsgObject
    try {
        const donormsgDoc = new messageModel({
            senderId:senderId,
            receiverId:receiverId,
            subject:subject,
            message:message,
            date:date
            
        })
        await donormsgDoc.save()
        response.send("your msg is send")
    }
    catch (err) {
        console.log('err' + err);
    }
}


export const admininbox = async (request,response) => {
    try{
        
        const senderId = request.query.senderId
       
        console.log("in receiver id ", senderId);
        const inbox_data = await messageModel.find({receiverId:senderId})
        console.log("id admin inbox",inbox_data);
        if (inbox_data!=null)
        response.send(inbox_data)

    }
    catch(err)
    {
        console.log(err);
    }
}


