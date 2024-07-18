import axios from 'axios';
import { useState } from "react";
import Footer from '../Footer';
import Navbar from '../Navbar';
import "../../css/registration.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Receiver() {
  const URL = "http://localhost:4000/Receiver";

  const [user, setUser] = useState({
    id: '',
    password: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL, user);
      console.log(response.data);
      setUser({ id: '', password: '', name: '', email: '', phone: '' });
      Swal.fire({
        title: "Registration successful",
        text: response.data,
        icon: "success"
      });
    } catch (err) {
      console.log('err' + err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mainreg">
        &nbsp;
        <div class="container container1 ">
          <form
            class="form-horizontal"
            role="form"
            onSubmit={handleSubmit}
            style={{ border: "4px solid black", borderRadius: "20px" }}
          >

            <h2>Receiver Form</h2>
            <div class="form-group">
              <label for="firstName" class="col-sm-3 control-label">
                <i class="fas fa-id-card"></i> Id
              </label>
              <div class="col-sm-9">
                <input
                  onChange={handleChange}
                  type="text"
                  name="id"
                  id="id"
                  placeholder="Enter ID"
                  class="form-control"
                  autofocus
                />
              </div>
            </div>
            <div class="form-group">
              <label for="lastName" class="col-sm-3 control-label">
                <i class="fas fa-lock"></i> Password
              </label>
              <div class="col-sm-9">
                <input
                  onChange={handleChange}
                  type="Password"
                  name="password"
                  id="Password:"
                  placeholder="Enter Password"
                  class="form-control"
                  autofocus
                />
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-3 control-label">
                <i class="fas fa-user"></i> Name
              </label>
              <div class="col-sm-9">
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="Name:"
                  placeholder="Enter Your Name"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-sm-3 control-label">
                <i class="fas fa-envelope"></i> Email
              </label>
              <div class="col-sm-9">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Enter Your Email"
                  class="form-control"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="phoneNumber" class="col-sm-3 control-label">
                <i class="fas fa-phone"></i> Phone no
              </label>
              <div class="col-sm-9">
                <input
                  onChange={handleChange}
                  type="number"
                  name="phone"
                  id="phoneNumber"
                  placeholder="Enter Phone Number"
                  class="form-control"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">
              Register
            </button>
          </form>
        </div>
        &nbsp;
      </div>
      <Footer />
    </>
  );
}

export default Receiver;
