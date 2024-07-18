import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Footer from '../Footer.jsx';
import photo from "../../images/contact.jpg"
import DonorHeader from '../donor/DonorHeader.jsx';

function DonationRegistration() {
    const URL = "http://localhost:4000/donor/bloodDonation";
    const Fill_URL = "http://localhost:4000/donor/donation_form";

    const token_data = localStorage.getItem("Token_key")
    const [user, setUser] = useState({
        senderId: token_data,
        name: "",
        email: "",
        phone: "",
        age: "",
        bloodGroup: ""
    });


    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const params = {
            id: token_data
        };
        try {
            const response = await axios.get(Fill_URL, { params });
            console.log(response.data);
            setUser(response.data);
        } catch (err) {
            console.log("err", err);
        }
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post(URL, user);
    //         console.log(response.data);
    //         setUser({
    //             senderId: token_data,
    //             name: "",
    //             email: "",
    //             phone: "",
    //             age: "",
    //             bloodGroup: ""
    //         });
    //         Swal.fire(response.data);
    //     } catch (err) {
    //         console.log("Error:", err.response.data); 
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const senderId = localStorage.getItem("Token_key");

            const userData = { ...user, senderId };
            const response = await axios.post(URL, userData);
            console.log(response.data);
            setUser({
                name: "",
                email: "",
                phone: "",
                age: "",
                bloodGroup: ""
            });
            Swal.fire({
                title: 'Success',
                text: response.data.message,
                icon: 'success'
            });
        } catch (err) {
            console.log("Error:", err.response.data);

        }
    };


    return (
        <>
            <DonorHeader />
            <h1 className="text-center">Donation Registration</h1>
            <div className="row">
            <div className="col-6">
                    <img src={photo} style={{height:"85vh",width:"50vw"}} alt="" />
                </div>
                <div className="col-6">
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">
                        <i className="fas fa-user"></i> {/* Font Awesome user icon */}
                        Name
                    </label>
                    <input
                        value={user.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        <i className="fas fa-envelope"></i> {/* Font Awesome envelope icon */}
                        Email
                    </label>
                    <input
                        value={user.email}
                        onChange={handleChange}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">
                        <i className="fas fa-phone"></i> {/* Font Awesome phone icon */}
                        Phone number
                    </label>
                    <input
                        value={user.phone}
                        onChange={handleChange}
                        type="number"
                        name="phone"
                        id="phone"
                        placeholder="Phone number"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="age">
                        <i className="fas fa-calendar-alt"></i> {/* Font Awesome calendar icon */}
                        Age
                    </label>
                    <input
                        value={user.age}
                        onChange={handleChange}
                        type="number"
                        name="age"
                        id="age"
                        placeholder="Age"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bloodGroup">
                        <i className="fas fa-tint"></i> {/* Font Awesome tint icon */}
                        Blood group
                    </label>
                    <select
                        className="form-control"
                        onChange={handleChange}
                        value={user.bloodGroup}
                        name="bloodGroup"
                        id="bloodGroup"
                    >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <button type='submit'>Submit</button>
            </form>
                </div>
               
            </div>
            <Footer />
        </>
    );
}

export default DonationRegistration;
