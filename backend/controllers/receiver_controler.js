import receiverModel from "../models/receiver.models.js";

export const receiver = (request,response)=>{
    response.send("this is receiver page ")
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
            alert("your msg is send")
        }
        catch (err) {
            console.log('err' + err);
        }
    }