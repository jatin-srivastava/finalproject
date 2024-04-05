import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/footer.css'
const Footer = () => {
  return (
    <footer className="footer bg-dark text-white " >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>About Us</h5>
            <p>A blood donation portal</p>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Address: Precursor info solutions</li>
              <li>Phone: 91 8546099680</li>
              <li>Email: sri.shubham8429@bbdu.ac.in</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><NavLink to="#"><i className="fab fa-facebook"></i> Facebook</NavLink></li>
              <li><NavLink to="#"><i className="fab fa-twitter"></i> Twitter</NavLink></li>
              <li><NavLink to="#"><i className="fab fa-instagram"></i> Instagram</NavLink></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">Copyright © 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
