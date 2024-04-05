import { useState } from "react";
import axios from 'axios';
import '../css/feedback.css'
import photo from '../images/b2.jpg'

const FeedBack =() =>{
    const URL="http://localhost:4000/addFeedBack"
    const [feedback, setFeedBack]=useState({name:"",email:"",remarks: ""});
    const [name, setUserName]=useState("")
    const [email, setemail]=useState("")
    const [remarks, setremarks]=useState("")
    const handleName=(e)=>{
        console.log(e.target.value);
        setUserName(e.target.value)
        console.log(name);
    }
    const handleemail=(e)=>{
        console.log(e.target.value);
        setemail(e.target.value)
        console.log(email);
    }
    const handleremarks=(e)=>{
        console.log(e.target.value);
        setremarks(e.target.value)
        console.log(remarks);
    }

    const handleForm=async(e)=>{
        e.preventDefault()
        setFeedBack({...feedback,name,email,remarks})
        try{
             const response=await axios.post(URL,feedback)
             
             console.log(response.data);
             setFeedBack({name:"",email:"",remarks: ""});

        }
        catch(err){
            console.log(err.message);
            
        }

        console.log("User name is "+name);
        console.log("User email is "+email);
        console.log("User Remarks is "+remarks);
    }
    return(
        <>
        
            <div className="photo">   
            <h1 style={{textAlign:"center", marginTop: "25px"}}>Feedback Form</h1>
            
            <div className="row " >
                <div className="col-sm-4  ">
                        <img classNameName="card-img-top" src={photo} alt="Card image cap"
                            style={{ width: "400px", height:"400px", borderRadius: "100%" }} />   
                </div>
                <div className="col-sm-8" >
                    <div className="card">
                        <div className="card-body" style={{backgroundColor:"transparent"}}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" value={name} onChange={handleName}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control"  placeholder="name@example.com" value={email} onChange={handleemail}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Remarks</label>
                                <textarea className="form-control"  rows="3" value={remarks} onChange={handleremarks}></textarea>
                            </div>
                            <div className="col-auto" style={{ textAlign: 'center' }}>
                                <button type="button" className="btn btn-primary mb-3" onClick={handleForm} >Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
                
            </div>    
            
        </>
    )
}
export default FeedBack