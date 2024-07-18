
import Footer from "../Footer";
import AdminHeader from "./AdminHeader";
import { useState,useEffect } from "react";
import axios from 'axios'
// import { useNavigate } from "react-router-dom";

function AdminCompose() {
    const URL = "http://localhost:4000/admin/adminCompose"
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     const token_data=localStorage.getItem("Token_key")
    //     console.log(`token data is  ${token_data}`);
    //     if (!token_data) // if no value in token data  it means user has not login
    //     {
    //         navigate('/admin_login')
    //     }
    //     setAcName(token_data)

    // })
    const token_data = localStorage.getItem("Token_key")
    const [msg,setMsg]=useState({ senderId: token_data,
    receiverId: "", 
    subject: "",
    message: "",
    date: new Date().toISOString()
})
const handleChange = (e)=>{
    setMsg({...msg,[e.target.name]:e.target.value});
    
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post(URL,msg)
      console.log(response.data);
      setMsg({senderId:token_data,receiverId:"",subject:"",message:""})

    }
    catch(err){
      console.log('err'+err);
    }
  }



return ( 

  <>
  <AdminHeader/>
  <div className="mainadmin">
            &nbsp;
            <div className="container container1 ">
                <form className="form-horizontal" role="form" style={{ backgroundColor: "transparent", border: "4px solid black", borderRadius: "20px" }} onSubmit={handleSubmit} >

          <div className="form-group">
              <label htmlFor="receiverId">Receiver ID</label>
              
          <input type="text" className="form-control" id="receiverId" onChange={handleChange} name="receiverId" placeholder="Enter receiver ID" required />
          </div>
          <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" onChange={handleChange} name="subject" placeholder="Enter subject" required />
          </div>
          <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3" onChange={handleChange} name="message" placeholder="Enter message" required></textarea>
          </div>
          <button type="submit" >Submit</button>
          </form>
            </div>
            &nbsp;
        </div>

            <Footer />
        </>
    );
}

export default AdminCompose;