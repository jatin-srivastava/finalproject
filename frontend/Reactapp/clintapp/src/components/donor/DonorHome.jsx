import DonorHeader from "./DonorHeader";
import Footer from "../Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import "../../css/userprofile.css"; // Import CSS file
import photo46 from "../../images/user.png"
function DonorHome() {
    const URL = "http://localhost:4000/donor/profile";
    const [profile, setProfile] = useState({
        id: '', name: '', email: '', phone: '', gender: '', age: '', bloodGroup: '', city: ''
    });

    const [acname, setAcName] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token_data = localStorage.getItem("Token_key");
        if (!token_data) {
            navigate('/DonorLogin');
        } else {
            setAcName(token_data);
            fetchData();
        }
    }, []);

    async function fetchData() {
        const token_data = localStorage.getItem("Token_key");
        const params = {
            id: token_data
        };
        try {
            const response = await axios.get(URL, { params });
            setProfile(response.data);
        } catch (err) {
            console.log("err", err);
        }
    }

    return (
        <>
            <DonorHeader />
            <h1>Welcome {acname}</h1>

            <div className="jumbotron container " >
                <div className="row">
                    <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4 text-center mt-5">
                        <img src={photo46} alt="stack photo" className="img" />
                    </div>

                    <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                        <div className="container container67" style={{ borderBottom: "1px solid black" }}>
                            <span className="card-title111 fa fa-id-card one">  {profile.id}</span>
                        </div>

                        <ul className="container container67 details">
                            <li className="li1"><p><i className="fas fa-user" style={{ width: "50px" }}></i><span className="card-title">{profile.name}</span></p></li>
                            <li className="li1"><p><i className="fa fa-phone one" style={{ width: "50px" }}></i> <span className="card-title">{profile.phone}</span></p></li>
                            <li className="li1"><p><i className="fa fa-envelope one" style={{ width: "50px" }}></i> <span className="card-title">{profile.email}</span></p></li>
                            <li className="li1"><p><i className="fa fa-map-marker one" style={{ width: "50px" }}></i> <span className="card-title">{profile.city}</span></p></li>

                            <li className="li1"><p><i className="fa fa-venus-mars one" style={{ width: "50px" }}></i> <span className="card-title">{profile.gender}</span></p></li>
                            <li className="li1"><p><i className="fa fa-calendar-alt one" style={{ width: "50px" }}></i> <span className="card-title">{profile.age}</span></p></li>
                            <li className="li1"><p><i className="fa fa-tint one" style={{ width: "50px" }}></i> <span className="card-title">{profile.bloodGroup}</span></p></li>
                            <li className="li1"><p><i className="" style={{ width: "50px" }}></i> <NavLink to="/useredit"><i className="far fa-edit" style={{ fontSize: "36px" }}></i>Edit profile</NavLink></p></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default DonorHome;
