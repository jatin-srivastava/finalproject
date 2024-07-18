import React, { useState,useEffect } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

function BloodDonationAppointment() {
    const URL = "http://localhost:4000/admin/blood-donation-appointment";
    const [dappointment, setDappointment] = useState({
        date: '',
        message: '',
        venue: ''
    });
    
    const [acname,setAcName]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const token_data=localStorage.getItem("Token_key")
        console.log(`token data is  ${token_data}`);
        if (!token_data) // if no value in token data  it means user has not login
        {
            navigate('/admin_login')
        }
        setAcName(token_data)

    })
    const handleChange = (e) => {
        setDappointment({ ...dappointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, dappointment);
            console.log(response.data);
            setDappointment({
                date: "",
                message: "",
                venue: ""
            });
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <AdminHeader/>
        
        <div className="row mt-4">
        <div className="col-4 text7 ">
            Ready to Give Appointment
        </div>
        <div className="col-6">
        <div className="container">
        <h1 className="mt-5 mb-4 center">Blood Donation Appointment</h1>
            <div className="row justify-content-center">
                <div className="col-md-6 bor">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input onChange={handleChange} type="date" className="form-control" name="date" id="date" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea onChange={handleChange} className="form-control" name="message" id="message" cols="30" rows="5"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="venue" className="form-label">Venue</label>
                            <input onChange={handleChange} type="text" className="form-control" name="venue" id="venue" />
                        </div>
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>

            
        </div>

     </div>
        <Footer/>        
        </>
    );
}

export default BloodDonationAppointment;
