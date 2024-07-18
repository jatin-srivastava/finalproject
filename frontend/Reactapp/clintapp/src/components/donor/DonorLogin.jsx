import '../../css/userLogin.css';
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Footer from '../Footer';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function DonorLogin() {
  const URL = "http://localhost:4000/donor/login";
  const navigate = useNavigate();

  const [user, setUser] = useState({ id: '', password: '' });

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(URL, user);
      console.log(response.data);
      setUser({ id: '', password: '' });
    
      if (response.data.code === 200) {
        navigate("/Donor_home");
        localStorage.setItem("Token_key", response.data.token);
        Swal.fire({
          title: "login successful",
          icon: "success"
        });
      } else if (response.data.code === 404) {
        alert("Password does not match");
      } else {
        alert("Donor does not exist");
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="main">
        <section className="background-radial-gradient overflow-hidden">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0 bg1" style={{ zIndex: "10" }}>
                <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "red" }}>
                  Be someone's lifeline;<br />
                  <span style={{ color: "red" }}>donate blood</span>
                </h1>
                <p className=" opacity-100" style={{ color: "black" }}>
                  <h4>
                    Blood donation is truly a heroic act, often described as a gift of life. 
                    Blood is an essential element that keeps us alive, 
                    and in times of emergencies or serious health conditions, 
                    the need for blood is crucial. 
                    This article aims to highlight a variety of inspiring blood donation 
                    that can encourage more people to become life-savers.
                  </h4>
                </p>
              </div>
              <div className="col-lg-6  position-relative">
                
                <div className="card card1" style={{ border: "3px solid black", borderRadius: "20px" }}>
                  <div className="card-body ">
                    <form onSubmit={handleForm}>
                      <h1 className="my-5 display-5 text-center fw-bold ls-tight" style={{ color: "black" }}>
                        Donor Login
                      </h1>
                      <div className="form-outline ">
                      <label className="form-label" htmlFor="form2Example11"><i class="fas fa-user"></i> Username</label>
                      <input type="text" onChange={handleChange} value={user.id} name='id' id="form2Example11" className="form-control" placeholder="Phone number or email address" />
                        </div>
                      <div className="form-outline ">
                      <label className="form-label" htmlFor="form2Example22"><i class="fas fa-lock"></i> Password</label>
                     <input type="password" onChange={handleChange} name='password' value={user.password} id="form2Example22" className="form-control" placeholder="Enter your Password" />
                        </div>
                      <button type="submit" className="btn btn-primary btn-block m-3">
                        Login
                      </button>
                      
                      
                     
                      {/* <div className="text-center">
                        <p>or sign up with:</p>
                        <Link to="/Donor" className=" btn-block ">Sign up</Link>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-google"></i>
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-twitter"></i>
                        </button>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-github"></i>
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default DonorLogin;
