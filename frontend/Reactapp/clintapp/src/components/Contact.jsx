import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import photo from '../images/contact.jpg';

const Contact = () => {
  const URL = 'http://localhost:4000/contact';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && /\d/.test(value)) {
      alert("Name field cannot contain digits.");
      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, query } = formData;

    if (!name || !email || !query) {
      Swal.fire({
        title: "Validation Error",
        text: "Name, email, and query fields are required.",
        icon: "error",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a valid email address.",
        icon: "error",
      });
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      Swal.fire({
        title: "Validation Error",
        text: "Please enter a valid phone number.",
        icon: "error",
      });
      return;
    }

    try {
      const response = await axios.post(URL, formData);
      console.log(response.data);
      setFormData({ name: '', email: '', phone: '', query: '' });
      Swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
      });
    } catch (err) {
      console.log('Error: ', err);
      Swal.fire({
        title: "Error",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(to right, #f7efc5, #80eedd, #f7efc5)',
      padding: '20px',
    }}>
      <div className="container gradient-bg">
        <div className="row">
          <div className="col-md-6 m-3">
            <img src={photo} alt="Contact" className="img-fluid rounded" style={{ maxHeight: '500px', width: '100%' }} />
          </div>
          <div className="col-md-5 m-3">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name"><i className="fa fa-user"></i> Name</label>
                  <input
                    type="text"
                    className="m-2 form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                  <input
                    type="email"
                    className="m-2 form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone"><i className="fa fa-phone"></i> Phone</label>
                  <input
                    type="number"
                    className="m-2 form-control"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="query"><i className="fa fa-comment"></i> Query</label>
                  <textarea
                    className="form-control"
                    id="query"
                    name="query"
                    rows="3"
                    placeholder="Enter your query"
                    value={formData.query}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  <i className="fa fa-paper-plane mr-2"></i>Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
