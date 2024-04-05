import Footer from "../Footer";
import ReceiverHeader from "./ReceiverHeader";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import "../../css/adminlogin.css"

function ReceiverComose() {
  const URL = "http://localhost:4000/receiver/receiverCompose"
  const token_data = localStorage.getItem("Token_key")
  const [msg, setMsg] = useState({
    
    senderId: token_data,
    receiverId: "",
    subject: "",
    message: "",
    date: new Date().toISOString()
  })
  const handleChange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value });

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL, msg)
      console.log(response.data);
      setMsg({ receiverId: "token_data", senderId: "", subject: "", message: "" })

    }
    catch (err) {
      console.log('err' + err);
    }
  }
  return (
    <>
      <ReceiverHeader />
      <div className="mainadmin">
                &nbsp;
                <div className="container container1 ">
                    <form className="form-horizontal" role="form" style={{ backgroundColor: "transparent", border: "4px solid black", borderRadius: "20px" }} onSubmit={handleSubmit} >

          {/* <div className="form-group">
            <label for="donorId">Donor ID</label>
            <input type="text" onChange={handleChange} name="senderId" className="form-control" id="senderId" placeholder="Enter sender ID" />

          </div> */}
          <div className="form-group">
            <label for="donorId">ID</label>
            <input type="text" onChange={handleChange} name='receiverId' className="form-control" id="Id" placeholder="Enter Donor ID" />
          </div>
          <div className="form-group">
            <label for="subject">Subject</label>
            <input type="text" onChange={handleChange} name="subject" className="form-control" id="subject" placeholder="Enter subject" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" onChange={handleChange} name="message" id="message" rows="3" placeholder="Enter message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          </form>
                </div>
                &nbsp;
            </div>

      <Footer />
    </>
  );
}

export default ReceiverComose;