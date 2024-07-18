import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import DonorHeader from "./DonorHeader";
import Footer from "../Footer";
import "../../css/appointment.css"


function AppointmentView() {
    const URL = "http://localhost:4000/donor/appointment_view"
    const [appointment, setAppointment] = useState([])
    useEffect(() => {
        
        const fetchData = async () => {
            
            try {
                const response = await axios.get(URL)
                console.log(response);
                setAppointment(response.data)

            }
            catch (err) {
                console.log(err);
            }

        }
        fetchData()

    }, [])


    return (
        <>
        <DonorHeader/>

        <div className="appointment-view-container">
            <h1 className="page-title">Appointment View</h1>
            <div className="appointment-list">
                {appointment.map((appointment, index) => (
                    <div className="appointment-card" key={index}>
                        <div className="card-content">
                            <h3 className="card-title ">Date: {appointment.date}</h3>
                            <p className="card-message">Message: {appointment.message}</p>
                            <p className="card-venue">Venue: {appointment.venue}</p>
                            <NavLink to="/bloodDonation" className="register-link">Click here to register</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
<Footer/>
        </>
    );
}

export default AppointmentView;