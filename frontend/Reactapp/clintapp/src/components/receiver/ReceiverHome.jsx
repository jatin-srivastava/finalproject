import ReceiverHeader from "./ReceiverHeader"
import Footer from "../Footer";
import { useNavigate, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/userprofile.css"

import photo46 from "../../images/user.png"



function ReceiverHome() {
    const URL = "http://localhost:4000/receiver/profile"
    const [profile, setProfile] = useState({ id: '', password: '', name: '', email: '', phone: '' })
    const [acname, setAcName] = useState("")

    const navigate = useNavigate()
    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        console.log(`token data is ${token_data}`);
        if (!token_data) {
            navigate("/receiver_login")
        }
        setAcName(token_data)
        fetchData()
    }, [])
    async function fetchData() {
        const token_data = localStorage.getItem("Token_key")
        const params = {
            id: token_data
        }
        try {
            const response = await axios.get(URL, { params })
            console.log(response.data);
            setProfile(response.data)
        }
        catch (err) {
            console.log("err" + err);
        }
    }



    return (
        <>
            <ReceiverHeader />
            <h1>hello {acname}</h1>

            <div className="jumbotron ">
                <div className="row">
                <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4 text-center mt-5">
                <img src={photo46} style={{height:"200px"}} alt="stack photo" className="img" />
 </div>
                    <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                        <div className="container container67" style={{ borderBottom: "1px solid black" }}>
                            <span className="card-title111 fa fa-id-card one">  {profile.id}</span>
                        </div>
                       
                        <ul className="container container67 details">
                            <li className="li1"><p><i className="fas fa-user" style={{ width: "50px" }}></i><span className="card-title">{profile.name}</span></p></li>
                            <li className="li1"><p><i className="fa fa-phone one" style={{ width: "50px" }}></i> <span className="card-title">{profile.phone}</span></p></li>
                            <li className="li1"><p><i className="fa fa-envelope one" style={{ width: "50px" }}></i> <span className="card-title">{profile.email}</span></p></li>
                            <li className="li1"><p><i className="" style={{ width: "50px" }}></i> <NavLink to="/receiveredit"><i className="far fa-edit" style={{ fontSize: "36px" }}></i>Edit profile</NavLink></p></li>
                        </ul>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default ReceiverHome;