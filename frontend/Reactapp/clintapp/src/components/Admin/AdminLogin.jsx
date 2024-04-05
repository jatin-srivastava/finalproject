import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom' // it is use to navigate the page
import Navbar from "../Navbar";
import "../../css/adminlogin.css"
import Footer from "../Footer";


function AdminLogin() {
  const URL = "http://localhost:4000/admin/login"


  const [user, setUser] = useState({ id: '', password: '' })

  const navigate = useNavigate()

  const handelForm = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(URL, user)
      console.log(response.data);
      setUser({ id: '', password: '' })
      if (response.data.code === 200) {
        // alert("admin exists")
        navigate("/admin_home") //defined in index.js
        localStorage.setItem("Token_key", response.data.token)
      }
      else if (response.data.code === 404) {
        alert("password does not match")
      }

      else {
        alert("admin does not exits")
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
      <Navbar />

      <div className="mainadmin">
        <div className="container container1 ">
          <form className="form-horizontal bg1" role="form" onSubmit={handelForm} style={{ border: "4px solid black", borderRadius: "20px" }}>

            <h2>ADMIN LOGIN</h2>
            <div className="form-outline mb-4">
              <input type="text" onChange={handleChange} value={user.id} name='id' id="form2Example11" className="form-control"
                placeholder="Phone number or email address" />
              <label className="form-label" htmlFor="form2Example11">Username</label>
            </div>
            <div className="form-outline mb-2">
              <input type="password" onChange={handleChange} name='password' value={user.password} id="form2Example22" className="form-control"
                placeholder="Enter your Password" />
              <label className="form-label" htmlFor="form2Example22">Password</label>
            </div>
            <p className="small  pb-lg-2 "><a className="text-black" href="#!" style={{fontSize:"20px"}}>Forgot password?</a></p>




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