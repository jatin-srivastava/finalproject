import { useEffect, useState } from "react";
import Footer from "../Footer";
import AdminHeader from "./AdminHeader";
import Donoation_update_detail from "./Donation_update_details";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Appoint_DonorDetail() {
    const [searchData, setSearchData]= useState([])
    const [phone,setPhone]=useState("")
    const URL = "http://localhost:4000/admin/search_donor"
    
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
    useEffect(()=>{
        const fetchData= async ()=>{
            try{
                console.log("phone no is "+phone);
                const params = {phone:phone}
                const response= await axios.get(URL,{params})
                setSearchData(response.data.phone_data)
                console.log(response.data);

            }
            catch(err){
                console.log(err);
            }

        }
        fetchData()
    },[phone])
    return ( 
        <>
        <AdminHeader/>

        <h1>this is Appointment donor details</h1>
        <div>
            <label htmlFor="">phone no</label>
            <input type="number" name="phone" onChange={(e) => { setPhone(e.target.value) }}
                    value={phone} />
        </div>


        <Donoation_update_detail searchData={searchData}/>

        <Footer/>
        </>
     );
}

export default Appoint_DonorDetail;