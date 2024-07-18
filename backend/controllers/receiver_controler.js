import receiverModel from "../models/receiver.models.js";
import FeedbackModel from '../models/feedback.models.js'
import donorModel from '../models/donor.models.js'
import messageModel from "../models/message.models.js";

export const receiver = (request,response)=>{
    response.send("this is receiver page ")
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



export const login = async (request,response) =>{
    try{
        let account_Info = request.body
        console.log(account_Info);
        const {id,pass} = account_Info
        const receiver_data = await receiverModel.findOne({id:id})
        console.log(receiver_data);
        
        if (receiver_data != null) 
        {
            if (receiver_data.password == pass)
             {
                // response.send('admin found')
                response.send({code:200,message:"receiverhome",token:receiver_data.id})
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
        const uid = request.query.id
        console.log(`data received from react is ${uid}`);
        const user_data= await receiverModel.findOne({id:uid})
        console.log(user_data);
        response.send(user_data)
    }
    catch(err){
        console.log("err"+err);
    }
}
export const receiveredit = async (request,response)=>{
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
            const status = await receiverModel.updateOne(filter_condition,updateDoc)
            console.log(status);
            response.send(status)
        }
        catch(err)
        {
            console.log("err"+err);
        }
    }

    export const receivermsg = async (request, response) => {
        const receivermsgObject = request.body
        const {senderId,receiverId,subject,message,date} = receivermsgObject
        try {
            const receivermsgDoc = new messageModel({
                
                receiverId:receiverId,
                senderId:senderId,
                subject:subject,
                message:message,
                date:date
                
            })
            await receivermsgDoc.save()
            response.send("your msg is send")
            
        }
        catch (err) {
            console.log('err' + err);
        }
    }


    
export const receiverinbox = async (request,response) => {
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

    
export const searchDonor = async (request, response) => {
    let donordata = {};
    try {
        const { bloodGroup, city }=request.query;
        console.log("in server", bloodGroup, city);
        if 
        (city) {  
            donordata = await donorModel.find({ city: city })
        } else if (bloodGroup) {
            donordata = await donorModel.find({ bloodGroup: bloodGroup })
        } else {
            donordata = await donorModel.find().limit(10);
        }
        response.send({ message: "success", donor_data: donordata });
    } catch (err) {
        console.log(err);
        
    }
};

