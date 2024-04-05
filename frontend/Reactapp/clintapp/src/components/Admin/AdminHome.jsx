import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";

import AdminHeader from "./AdminHeader";
import Footer from "../Footer";

function AdminHome() {


    const [acname,setAcName]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const token_data=localStorage.getItem("Token_key")
        console.log(`token data is  ${token_data}`);
        if (!token_data) // if no value in token data  it means user has not login
        {
            navigate('/admin_login')
        }
        setAcName(token_data)

    })



    return ( <>
    <AdminHeader/>
    

     <h1>hello {acname}</h1>

     

<Footer/>
    </> );
}

export default AdminHome;