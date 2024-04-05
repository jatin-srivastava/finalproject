import mongoose from 'mongoose'

const dbURL="mongodb+srv://lalashubham2024:shubham2024@cluster0.wfufkeo.mongodb.net/lifeline_db"

const connect_db =async ()=>{
    try{
        const connectionObject = await mongoose.connect(`${dbURL}`)
        console.log('connection etablish with MONGODB');

    }
    catch(err){
        console.log('err'+err);
    }
}

export default connect_db