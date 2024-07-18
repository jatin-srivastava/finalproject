import React, { useState } from "react";
import axios from "axios";
import "../../css/registration.css";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Donor = () => {
    const URL = "http://localhost:4000/Donor";

    const [user, setUser] = useState({
        id: "",
        password: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        age: "",
        bloodGroup: "",
        city: "",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, user);
            console.log(response.data);
            setUser({
                id: "",
                password: "",
                name: "",
                email: "",
                phone: "",
                gender: "",
                age: "",
                bloodGroup: "",
                city: ""
            });
            Swal.fire({
                title: "Registration successful",
                text: response.data,
                icon: "success"
              });

            
        } catch (err) {
            console.log("Error:", err.response.data); // Log the error response from the server
        }
    };

    return (
        <>
            <Navbar />
            <div className="mainreg">
                &nbsp;
                <div className="container container1 ">
                    <form
                        className="form-horizontal"
                        role="form"
                        style={{ border: "4px solid black", borderRadius: "20px", bsscrollheight: "100px" }}

                        onSubmit={handleSubmit}
                    >
                        <h2>Registration</h2>
                        <div className="form-group">
                            <label htmlFor="firstName" className="col-sm-3 control-label">
                            <i className="fa fa-user"></i> Id
                            </label>
                            <div className="col-sm-9">
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="id"
                                    id="id"
                                    placeholder="ID"
                                    className="form-control"
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="col-sm-3 control-label">
                            <i className="fas fa-lock"></i> Password
                            </label>
                            <div className="col-sm-9">
                                <input
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-sm-3 control-label">
                            <i className="fa fa-code"></i> Name
                            </label>
                            <div className="col-sm-9">
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-sm-3 control-label">
                            <i className="fas fa-envelope"></i> Email
                            </label>
                            <div className="col-sm-9">
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber" className="col-sm-3 control-label">
                            <i className="fas fa-phone"></i> Phone number
                            </label>
                            <div className="col-sm-9">
                                <input
                                    onChange={handleChange}
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Phone number"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label>Gender </label>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="male">
                                <i className="fas fa-mars"></i>  Male
                                </label>
                                <input
                                    onChange={handleChange}
                                    
                                    className="form-check-input onChange={handleChange}"
                                    type="radio"
                                    name="gender"
                                    id="male"
                                    value='male'
                                />
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="female">
                                <i className="fas fa-venus"></i> Female
                                </label>
                                <input
                                    onChange={handleChange}
                                    className="form-check-input onChange={handleChange}"
                                    type="radio"
                                    name="gender"
                                    id="female"
                                    value="female"
                                />
                            </div>
                            <div className="form-check form-check-inline">
                                <label className="form-check-label" htmlFor="other">
                                    Other
                                </label>
                                <input
                                    onChange={handleChange}
                                    className="form-check-input onChange={handleChange}"
                                    type="radio"
                                    name="gender"
                                    id="other"
                                    value="other"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age" className="col-sm-3 control-label">
                            <i className="fas fa-hourglass-half"></i> Age
                            </label>
                            <div className="col-sm-9">
                                <input
                                    onChange={handleChange}
                                    type="number"
                                    name="age"
                                    id="age"
                                    placeholder="Age"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <label htmlFor="city"><i className="fas fa-tint"></i> Blood group </label>
                        <select className="form-control" onChange={handleChange} name="bloodGroup" id="bloodGroup">
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
                        <div className="form-group mt-3">
                            <label htmlFor="city"><i class="fas fa-city"></i> City </label>
                            <select onChange={handleChange} className="form-control" name="city" id="city">
                                <option value="">Select City</option>
                                <option value="agra">Agra</option>
                                <option value="allahabad">Allahabad</option>
                                <option value="lucknow">Lucknow</option>
                                <option value="kanpur">Kanpur</option>
                                <option value="varanasi">Varanasi</option>
                                <option value="ghaziabad">Ghaziabad</option>
                                <option value="meerut">Meerut</option>
                                <option value="noida">Noida</option>
                                <option value="bareilly">Bareilly</option>
                                <option value="aligarh">Aligarh</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-danger mt-3">
                            Register
                        </button>
                        <h5>if you have already account then</h5>
                        <button type="submit" className="btn btn-danger mt-3">
                            <a href="../DonorLogin">Login</a>
                        </button>
                    </form>
                </div>
                &nbsp;
            </div>
            <Footer />
        </>
    );
};

export default Donor;
