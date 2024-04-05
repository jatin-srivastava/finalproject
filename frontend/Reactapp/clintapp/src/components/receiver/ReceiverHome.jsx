import ReceiverHeader from "./ReceiverHeader"
import Footer from "../Footer";
import { useNavigate, NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";


function ReceiverHome() {
    const URL = "http://localhost:4000/receiver/profile"
    const [profile ,setProfile] = useState({id:'',password:'',name:'',email:'',phone:''})
    const [acname,setAcName]=useState("")

    const navigate=useNavigate()
    useEffect(()=>{
        const token_data=localStorage.getItem("Token_key")
        console.log(`token data is ${token_data}`);
        if (!token_data)
        {
            navigate("/receiver_login")
        }
        setAcName(token_data)
    fetchData()
    },[])
    async function fetchData (){
        const token_data = localStorage.getItem("Token_key")
        const params = {
            id : token_data
        }
        try{
            const response = await axios.get(URL ,{params})
            console.log(response.data);
            setProfile(response.data)
        }
        catch(err){
            console.log("err"+err);
        }
    }



    return ( 
        <>
        <ReceiverHeader/>
        <h1>hello {acname}</h1>
        <div className="card" style={{ margin: "12%", backgroundColor: "cyan", padding: "2%", width: "50%" }}>
            <div className="card-body">
                
                <h1 className='card-title'>Your id:{profile.id}</h1>
                <h1 className='card-title'>Your Name:{profile.name}</h1>
                <h1 className='card-title'>Your Email:{profile.email}</h1>
                <h1 className='card-title'>Your Phone:{profile.phone}</h1>
                <NavLink to="/receiveredit"><i class='fas fa-edit' style={{ fontSize: "36px" }}></i></NavLink>
            </div>
        </div>
        <Footer/>
        </>
     );
}

export default ReceiverHome;