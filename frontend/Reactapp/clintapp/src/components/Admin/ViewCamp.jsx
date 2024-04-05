import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from '../Admin/AdminHeader'
import Footer from '../Footer'

function ViewCamp() {
    const URL = "http://localhost:4000/admin/view_camp"
    const [viewcamp,setViewCamp]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const token_data = localStorage.getItem("Token_key")
        if(!token_data){
            navigate("/admin_login")
        }
        const fetchData = async () =>{
            try{
                const response=await axios.get(URL)
                console.log(response.data);
                setViewCamp(response.data)
            }
            catch(err){
                console.log("err"+err);
            }
            
        }
        fetchData()
    },[]);

    return ( 
        <>
        <AdminHeader/>
        <h1>This is view camp</h1>
        <div className="row">
                {viewcamp.map((uf, index) => (
                    <div className="col-4" key={index}>
                        <div className="card" style={{ marginLeft: "20px" }}>
                            <div className="card-body">
                                <h5 className="card-title">Posted By: {uf.event_name}</h5>
                                <h5 className="card-title">Venue: {uf.event_venue}</h5>
                                <h5 className="card-title">Description: {uf.event_description}</h5>
                                <h5 className="card-title">Date: {uf.event_date}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        <Footer/>
        </>
     );
}

export default ViewCamp;