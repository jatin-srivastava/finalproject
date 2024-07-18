import { NavLink , useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import "../../css/adminhome.css"
import axios from "axios";
import photo45 from "../../images/admin.png"
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


    const URL = "http://localhost:4000/admin/blood-donation-appointment";
    const [dappointment, setDappointment] = useState({
        date: '',
        message: '',
        venue: ''
    });

    const handleChange = (e) => {
        setDappointment({ ...dappointment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, dappointment);
            console.log(response.data);
            setDappointment({
                date: "",
                message: "",
                venue: ""
            });
        }
        catch (err) {
            console.log(err);
        }
    };


    return ( <>
    <AdminHeader/>
    

    
     <div className="bg80">
     <h1>Welcome {acname}</h1>
     <div className="container mt-3 " >
        
     <div className="row ">
       
       <div className="col-md-4 ">
       <NavLink className="dec" to="/view_donor" >
          <div className="card bg20" style={{ width: '20rem', height: '12rem' }}>
            
            <div className="card-body h3 m-5">
              View All Donors

            </div>
          </div>
          </NavLink >
        </div>
    
        <div className="col-md-4 ">
        <NavLink className="dec" to="/receiver_view"> 
          <div className="card bg20" style={{ width: '20rem', height: '12rem' }}>
            
            <div className="card-body h3 m-5">
             View All receiver
            
            </div>
          </div>
          </NavLink >
        </div>
        <div className="col-md-4 ">
        <NavLink className="dec" to='/appointment_detail'>
          <div className="card bg20" style={{ width: '20rem', height: '12rem' }}>
            
            <div className="card-body h3 m-5">
              Appointment Donor detail
            </div>
          </div>
          </NavLink >
        </div>
      </div>

     </div>
     <div className="row ">
        <div className="col-4 text7 ">
            Ready to Give Appointment

        </div>
        <div className="col-6">
        <NavLink to="/blood-donation-appointment" className="dec">
        <div className="card bg20"  style={{ width: '20rem', height: '12rem',margin:"100px" }}>
            <h1 className="m-5">Click here</h1>
            </div>
        </NavLink>
            
        </div>

     </div>

     </div>
    


     

<Footer/>
    </> );
}

export default AdminHome;