import React, { useState } from "react";
import axios from 'axios';
import '../../css/feedback.css'
import photo from '../../images/b2.jpg'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReceiverHeader from "./ReceiverHeader";
import Footer from "../Footer";

const FeedBack = () => {
    const URL = "http://localhost:4000/receiver/addFeedBack";
    const [feedback, setFeedback] = useState({ name: "", email: "", remarks: "", rating: "", remark: "" });
    const MySwal = withReactContent(Swal)



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedback(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, feedback);
            console.log(response.data);
            setFeedback({ name: "", email: "", remarks: "", rating: "", remark: "" });
            Swal.fire({
                title: "Feedback submited",
                text: response.data,
                icon: "success"
              });
        } 
        catch (err) {
            console.log(err.message);
        }
    };

    return (
        
       <>
       <ReceiverHeader/>
       

       <div className="photo">
            
            <h1 style={{ textAlign: "center", marginTop: "25px" }}>Feedback Form</h1>
            <div className="row">
                <div className="col-sm-4">
                    <img className="card-img-top" src={photo} alt="Card image cap"
                        style={{ width: "400px", height: "400px", borderRadius: "100%" }} />
                </div>
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body" style={{ backgroundColor: "transparent" }}>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={feedback.name} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={feedback.email} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="remarks" className="form-label">Remarks</label>
                                    <textarea className="form-control" id="remarks" name="remarks" rows="3" value={feedback.remarks} onChange={handleChange}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rating" className="form-label">Rating</label>
                                    <input type="number" className="form-control" id="rating" name="rating" value={feedback.rating} onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="remark" className="form-label">Remark</label>
                                    <textarea className="form-control" id="remark" name="remark" rows="3" value={feedback.remark} onChange={handleChange}></textarea>
                                </div>
                                <div className="col-auto" style={{ textAlign: 'center' }}>
                                    <button type="submit" className="btn btn-primary mb-3">Submit</button>
                                </div>
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

export default FeedBack;
