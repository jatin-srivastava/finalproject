import DonorHeader from "./DonorHeader";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

function UserEditProfile() {
    const URL = "http://localhost:4000/donor/profile"


    const Edit_URL = "http://localhost:4000/donor/useredit"

    const [editProfile, setEditProfile] = useState({ name: "", email: "", phone: "" })


    const [acname, setAcName] = useState("")
    const navigate = useNavigate()
    const token_data = localStorage.getItem("Token_key")
    useEffect(() => {
        console.log(`token data is  ${token_data}`);
        if (!token_data) // if no value in token data  it means user has not login
        {
            navigate('/donor_login')
        }
        setAcName(token_data)
        fetchData()

    }, [])


    async function fetchData() {
        const params = {
            id: token_data
        }
        try {
            const response = await axios.get(URL, { params })
            console.log(response.data);
            setEditProfile(response.data)
        }
        catch (err) {
            console.log("err" + err);
        }

    }
    //fetch data close


    const handleChange = (e) => {
        setEditProfile({ ...editProfile, [e.target.name]: e.target.value })
    }

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(Edit_URL, editProfile);
            if (response.data.acknowledged)
                alert("profile Updated Succesfully")
        }
        catch (err) {
            console.log("err" + err);
        }
    }


    return (
        <>
            <DonorHeader />

            <h5>hello {acname}</h5>
            <form onSubmit={handleForm}>
                <div className="card" style={{ margin: "12%", padding: "2%", width: "50%" }}>

                    <div className="card-body">
                        <h5 className='card-title'>Your Name:<input type="text" onChange={handleChange} name="name" value={editProfile.name} /></h5>
                        <h5 className='card-title'>Your Email:<input type="email" onChange={handleChange} name="email" value={editProfile.email} /></h5>
                        <h5 className='card-title'>Your Phone: <input type="number" onChange={handleChange} name="phone" value={editProfile.phone} /></h5>

                    </div>
                    <button className="btn btn_danger bg-warning" style={{ width: "150px", marginLeft: "auto", marginRight: "auto" }}>Edit Profile</button>

                </div>
            </form>



            <Footer />

        </>);
}

export default UserEditProfile;