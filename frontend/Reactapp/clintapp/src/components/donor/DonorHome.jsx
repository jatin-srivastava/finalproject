import DonorHeader from "./DonorHeader";
import Footer from "../Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

function DonorHome() {
    const URL = "http://localhost:4000/donor/profile"
    const [profile, setProfile] = useState({id: '', name: '', email: '', phone: '', gender: '', age: '', bloodGroup: '', city: ''
})


    const [acname, setAcName] = useState("")
    const navigate = useNavigate()
   
    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        console.log(`token data is  ${token_data}`);
        if (!token_data) // if no value in token data  it means user has not login
        {
            navigate('/DonorLogin')
        }
        setAcName(token_data)
        fetchData()

    },[])

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
    <DonorHeader/>
        
        <h1>hello {acname}</h1>
        
        <div className="card" style={{ margin: "12%", backgroundColor: "cyan", padding: "2%", width: "50%" }}>
            <div className="card-body">
                
                <h1 className='card-title'>Your id:{profile.id}</h1>
                <h1 className='card-title'>Your Name:{profile.name}</h1>
                <h1 className='card-title'>Your Email:{profile.email}</h1>
                <h1 className='card-title'>Your Phone:{profile.phone}</h1>
                <h1 className='card-title'>Your gender:{profile.gender}</h1>
                <h1 className='card-title'>Your age:{profile.age}</h1>
                <h1 className='card-title'>Your bloodGroup:{profile.bloodGroup}</h1>
                <h1 className='card-title'>Your city:{profile.city}</h1>
                <NavLink to="/useredit"><i class='fas fa-edit' style={{ fontSize: "36px" }}></i></NavLink>
            </div>
        </div>



        <Footer/>

    </>
    );
}

export default DonorHome;