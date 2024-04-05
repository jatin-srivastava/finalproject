

import adminModel from "../models/admin.model.js"
import campModel from "../models/campDetail.model.js"
import FeedbackModel from "../models/feedback.models.js"
import contactModel from "../models/contact.models.js"



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