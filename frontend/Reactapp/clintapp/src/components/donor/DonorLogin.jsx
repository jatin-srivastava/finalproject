import '../../css/userLogin.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom' // it is use to navigate the page
import Navbar from "../Navbar"
import Footer from '../Footer';

function DonorLogin() {
  const URL = "http://localhost:4000/donor/login"
  const navigate = useNavigate ()

  // const token_data = localStorage.getItem("Token_key")
  // if (!token_data)
  // {
  //     navigate('/DonorLogin')

  // }

  const [user, setUser] = useState({ id: '', password: '' })



  const handelForm = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(URL, user)
      console.log(response.data);
      setUser({ id: '', password: '' })
      if (response.data.code === 200) {
        // alert("admin exists")
        navigate("/Donor_home") //defined in index.js
        localStorage.setItem("Token_key", response.data.token)
      }
      else if (response.data.code === 404) {
        alert("password does not match")
      }

      else {
        alert("donor does not exits")
      }



    }
    catch (err) {
      console.log('err' + err);
    }

  }
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }


  return (

    <>
<Navbar/>
<div className="main">
      <section className="background-radial-gradient overflow-hidden">


        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0 bg1" style={{ "z-index": "10" }}>
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ "color": "red" }}>
              Be someone's lifeline;<br />
                <span style={{ "color": "red" }}>donate blood</span>
              </h1>
              <p className="mb-4 opacity-100" style={{ "color": "black"  }}>
                <h4>
              Blood donation is truly a heroic act, often described as a gift of life. 
              Blood is an essential element that keeps us alive, 
              and in times of emergencies or serious health conditions, 
              the need for blood is crucial. 
              This article aims to highlight a variety of inspiring blood donation 
              hat can encourage more people to become life-savers.
              </h4>
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
              <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

              <div className="card card1 " style={{ border:"3px solid black", borderRadius:"20px"}}>
                <div className="card-body px-4 py-5 px-md-5">


                  <form onSubmit={handelForm} >
                  <h1 className="my-5 display-5 text-center fw-bold ls-tight" style={{ "color": "black" }}>
                    Donor Login
                  </h1>
                

                    <div className="form-outline mb-4">
                      <input type="text" onChange={handleChange} value={user.id} name='id' id="form2Example11" className="form-control"
                        placeholder="Phone number or email address" />
                      <label className="form-label" htmlFor="form2Example11">Username</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" onChange={handleChange} name='password' value={user.password} id="form2Example22" className="form-control"
                      placeholder="Enter your Password" />
                      <label className="form-label" htmlFor="form2Example22">Password</label>
                    </div>




                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Login
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
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
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
<Footer/>




    </>
  );
}

export default DonorLogin;














