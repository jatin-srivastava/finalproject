

import donorModel from '../models/donor.models.js'
import messageModel from "../models/message.models.js"


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