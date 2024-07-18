

import appointmentModel from '../models/donorAppointment.model.js'
import donorModel from '../models/donor.models.js'
import messageModel from "../models/message.models.js"
import storyModel from '../models/story.model.js'
import bloodDonationModel from '../models/bloodDonation.model.js'
import { request, response } from 'express'



export const donor = (request,response)=>{
    response.send("this is Donor page ")
}


export const login = async (request, response) => {
    try {
        let account_Info = request.body
        console.log(account_Info);
        const { id, password } = account_Info

        const donor_data = await donorModel.findOne({id:id})
        console.log(donor_data);

        if (donor_data != null) 
        {
            if (donor_data.password == password)
             {
                // response.send('admin found')
                response.send({code:200,message:"donorhome",token:donor_data.id})
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


export const profile = async (request,response)=>{
    try{
        const uid = request.query.id //fetching data from react
        console.log(`data received from react is ${uid}`);
        const user_data = await donorModel.findOne({id:uid})
        console.log(user_data);
        response.send(user_data)
    }
        catch(err){
            console.log("err" +err);  
        }
   
    }

    export const useredit = async(request,response)=>{
        try{
            const user_data = request.body
            const {id ,name,email,phone}= user_data
            const updateDoc = {
                $set : {
                    name:name,
                    email:email,
                    phone:phone
                }
            };
            const filter_condition = {id:id}
            const status = await donorModel.updateOne(filter_condition,updateDoc)
            console.log(status);
            response.send(status)
        }
        catch(err)
        {
            console.log("err"+err);
        }
    }
    

    
export const donormsg = async (request, response) => {
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

export const donorinbox = async (request,response) => {
    try{
        
        const senderId = request.query.senderId
       
        console.log("in receiver id ", senderId);
        const inbox_data = await messageModel.find({receiverId:senderId})
        console.log("id donor inbox",inbox_data);
        if (inbox_data!=null)
        response.send(inbox_data)

    }
    catch(err)
    {
        console.log(err);
    }
}

export const story = async (request,response) =>{
    const storyObject = request.body
    const {donorId,title,content,date} = storyObject
    try{
        const storyDoc = new storyModel({
            
            donorId:donorId,
            title:title,
            content:content,
            date:date 
        })
        await storyDoc.save()
        response.send("thankyou for giving story")
    }
    catch(err){
        console.log(err);
    }
}


// blood doantion form

export const bloodDonation = async (request, response) => {
    const donationObject = request.body;
    const {senderId, name, email, phone, age, bloodGroup } = donationObject;
    try {      
        const donorDoc = new bloodDonationModel({
            senderId: senderId,
            name: name,
            email: email,
            phone: phone,
            age: age,
            bloodGroup: bloodGroup,
            
        });
       
        await donorDoc.save();
        
       
        response.status(200).send("Thank you for registering the blood donation form.");
    } catch (err) {
        console.log('Error in bloodDonation:', err);
       
    }
};


// fill data on blood donation form
export const donation_form = async (request, response) => {
    try {
        const uid = request.query.id;
        console.log(`Data received from React: ${uid}`);
        const user_Data = await donorModel.findOne({ id: uid });
        console.log(user_Data);
        response.send(user_Data)
        
    } catch (err) {
        console.log('Error in donation_form:', err);
    }
};

export const appointment_view = async(request,response)=>{
    try{
        const appointmentData = await appointmentModel.find()
        if (appointmentData != null)
        response.send(appointmentData)
    else 
    response.send("no appointment yet")

    }
    catch(err){
        console.log(err);
    }
}


export const donor_history = async (request,response)=>{
    try{
        const historyData = await bloodDonationModel.find()
        if (historyData != null){
            response.send(historyData)
        }
        else{
            response.send("no history")
        }
    }catch(err){
        console.log(err);
    }
}