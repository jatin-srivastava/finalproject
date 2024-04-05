
import axios from 'axios'

import { useState } from "react";
import Footer from '../Footer';
import Navbar from '../Navbar';
import "../../css/registration.css"
function Receiver() {
  const URL = "http://localhost:4000/Receiver"

  const [user, setUser] = useState({
    id: '', password: '', name: '', email: '', phone: ''
  })

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });

  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL, user)
      console.log(response.data);
      setUser({ id: '', password: '', name: '', email: '', phone: '' })
    }
    catch (err) {
      console.log('err' + err);
    }
  }



  return (
    <>
    <Navbar/>
      <div className="mainreg">
        &nbsp;
        <div class="container container1 ">
          <form class="form-horizontal" role="form" onSubmit={handleSubmit} style={{   border:"4px solid black", borderRadius:"20px"}}>

            <h2>Reciver Form</h2>
            <div class="form-group">
              <label for="firstName" class="col-sm-3 control-label">ID:</label>
              <div class="col-sm-9">
                <input onChange={handleChange} type="text" name='id' id="id" placeholder="enter id" class="form-control" autofocus />
              </div>
            </div>
            <div class="form-group">
              <label for="lastName" class="col-sm-3 control-label">Password:</label>
              <div class="col-sm-9">
                <input onChange={handleChange} type="Password" name='password' id="Password:" placeholder="password" class="form-control" autofocus />
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 control-label">Name: </label>
              <div class="col-sm-9">
                <input onChange={handleChange} type="text" name='name' id="Name:" placeholder="enter your name" class="form-control"  />
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-sm-3 control-label">Email</label>
              <div class="col-sm-9">
                <input onChange={handleChange} type="email" name='email' id="Email" placeholder="Enter your email" class="form-control" />
              </div>
            </div>


            <div class="form-group">
              <label for="phoneNumber" class="col-sm-3 control-label">Phone number </label>
              <div class="col-sm-9">
                <input onChange={handleChange} type="phoneNumber" name='phone' id="phoneNumber" placeholder="Phone number" class="form-control" />
                
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Register</button>
          </form>
        </div>
        &nbsp;
      </div>




      <Footer />

    </>
  );
}

export default Receiver;