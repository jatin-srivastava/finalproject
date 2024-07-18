import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import "../../css/adminlogin.css";
import Footer from "../Footer";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AdminLogin() {
    const URL = "http://localhost:4000/admin/login";
    const [user, setUser] = useState({ id: '', password: '' });
    const navigate = useNavigate();

    const [error, setError] = useState({});

    const handelForm = async (e) => {
        e.preventDefault();

        try {
            checkEmpty();
            if (Object.keys(error).length > 0) {
                setError(error);
            } else {
                const response = await axios.post(URL, user);
                console.log(response.data);
                setUser({ id: '', password: '' });
                
                if (response.data.code === 200) {
                    navigate("/admin_home");
                    localStorage.setItem("Token_key", response.data.token);
                    Swal.fire({
                        title: "login successful",
                        icon: "success"
                      });
                } else if (response.data.code === 404) {
                    alert("Password does not match");
                } else {
                    alert("Admin does not exist");
                }
            }
        } catch (err) {
            console.log('Error: ' + err);
        }
    };

    const checkEmpty = () => {
        const error_msg = {};
        if (!user.id) {
            error_msg.x = "Admin ID required";
        }
        if (!user.password) {
            error_msg.pass = "Password data is required";
        }
        setError(error_msg);
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Navbar />
            <div className="mainadmin">
                <div className="container container1 ">
                    <form className="form-horizontal bg1" role="form" onSubmit={handelForm} style={{ border: "4px solid black", borderRadius: "20px" }}>
                        <h2>ADMIN LOGIN</h2>
                        <div className="form-outline mb-4">
                            <input type="text" onChange={handleChange} value={user.id} name='id' id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                            {error.x && <span style={{ color: "red" }}>{error.x}</span>}
                            <label className="form-label" htmlFor="form2Example11"><i class="fas fa-user"></i> Username</label>
                        </div>
                        <div className="form-outline mb-2">
                            <input type="password" onChange={handleChange} name='password' value={user.password} id="form2Example22" className="form-control" placeholder="Enter your Password" />
                            {error.pass && <span style={{ color: "red" }}>{error.pass}</span>}
                            <label className="form-label" htmlFor="form2Example22"><i class="fas fa-lock"></i> Password</label>
                        </div>
                        {/* <p className="small pb-lg-2 "><a className="text-black" href="#!" style={{ fontSize: "20px" }}>Forgot password?</a></p> */}
                        <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                    </form>
                </div>
                &nbsp;
            </div>
            <Footer />
        </>
    );
}

export default AdminLogin;
