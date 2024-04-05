import axios from "axios";
import React, { useState, useEffect } from "react";
import '../css/events.css'
import photo1 from '../images/blood.jpg'

function UpcomingEvents() {
    const URL = "http://localhost:4000/upcoming_event";
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                console.log(response.data);
                setProfile(response.data);
            } catch (err) {
                console.log("err" + err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>hello this is camp detail</h1>
            <div className="row">
                {profile.map((uf, index) => (
                    <div className="col-4" key={index}>
                        <div className="card" style={{ marginLeft: "20px " }}>
                            <div className="[ col-md-offset-2  ]">
                                <div className="[ info-card ]">
                                    <img src={photo1} alt="" style={{height:"100%",width:"100%"}}/>
                                    <div className="[ info-card-details ] animate">
                                        <div className="[ info-card-header ]">
                                            <h5 className="card-title">Venue: {uf.event_venue}</h5>
                                        </div>
                                        <div className="[ info-card-detail ]">
                                            <h5 className="card-title">Posted By: {uf.event_name}</h5>
                                            <h5 className="card-title">Description: {uf.event_description}</h5>
                                            <h5 className="card-title">Date: {uf.event_date}</h5>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default UpcomingEvents;
