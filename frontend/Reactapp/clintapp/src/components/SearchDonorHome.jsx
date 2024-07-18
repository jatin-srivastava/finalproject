import { useEffect, useState } from "react";
import axios from "axios";
import DonorCategory from "./DonorCategory";

function ViewDonorHome() {
    const [bgroup, setBgroup] = useState("");
    const [city, setCity] = useState("")
    const [donordata, setDonorData] = useState([])

    const URL = "http://localhost:4000/searchdonor"
    useEffect(() => {
        const fetchData = async ()=>{
            try{
                console.log("blood group is "+bgroup);
                console.log("city is "+city);
                const params = {bloodGroup:bgroup,city:city}
                const response= await axios.get(URL,{params})
                setDonorData(response.data.donor_data)
                console.log(response.data);

            }
            catch(err)
            {
                console.log(err);
            }
        }
        fetchData()

    }, [bgroup, city])

    return (
        <div style={{ background: 'linear-gradient(to right, #f7efc5, #80eedd, #f7efc5)', padding: '20px' }}>
        <div>
            <h2 style={{ fontSize: '38px', marginBottom: '20px' ,textAlign:"center" }} className="">Search Donors</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '20px' }}>
                    <label htmlFor="bgroup" style={{ display: 'block', marginBottom: '5px' }}>Search by blood group:</label>
                    <input
                        name="bgroup"
                        type="text"
                        id="bgroup"
                        onChange={(e) => { setBgroup(e.target.value) }}
                        value={bgroup}
                        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                        placeholder="Enter Blood group"
                    />
                </div>
                <h2 style={{ margin: '10px'}}>or</h2>
                <div>
                    <label htmlFor="city" style={{ display: 'block', marginBottom: '5px' }}>Search by city:</label>
                    <input
                        name="city"
                        type="text"
                        id="city"
                        onChange={(e) => { setCity(e.target.value) }}
                        value={city}
                        style={{ marginBottom: '10px', padding: '8px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc', width: '300px' }}
                        placeholder="Enter the city"
                    />
                </div>
            </div>
        </div>
        <DonorCategory donordata={donordata} />
    </div>
    
    );
}

export default ViewDonorHome;







// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="/">Life Line Portal</a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="/HomePage">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/about">About us</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/contact">Contact Us</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/viewDonorHome">Search Blood</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="/" role="button" id="registrationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Registration
//             </a>
//             <div className="dropdown-menu" aria-labelledby="registrationDropdown">
//               <a className="dropdown-item" href="/Donor">Donor</a>
//               <a className="dropdown-item" href="/Receiver">Receiver</a>
//             </div>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="/" role="button" id="loginDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Login
//             </a>
//             <div className="dropdown-menu" aria-labelledby="loginDropdown">
//               <a className="dropdown-item" href="/DonorLogin">Donor Login</a>
//               <a className="dropdown-item" href="/receiver_login">Receiver Login</a>
//               <a className="dropdown-item" href="/admin_login">Admin Login</a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/showStory">Show story</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/upcoming_event">Camp Detail</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="/" role="button" id="moreAboutBloodDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               More About Blood
//             </a>
//             <div className="dropdown-menu" aria-labelledby="moreAboutBloodDropdown">
//               <a className="dropdown-item" href="/compatibility">Compatibility</a>
//               <a className="dropdown-item" href="/bloodTypes">Blood Donation types</a>
//               <a className="dropdown-item" href="/commonDisease">Common diseases</a>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
