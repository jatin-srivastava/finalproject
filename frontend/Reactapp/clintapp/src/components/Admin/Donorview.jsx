import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function View() {
    
    const [user, setUser] = useState([])
    const navigate = useNavigate

    const URL = "http://localhost:4000/admin/viewDonor"

    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        if (!token_data) {
            navigate("/admin_login")
        }
        const fetchData = async () => {
            try {

                const response = await axios.get(URL)
                console.log(response.data);
                setUser(response.data)
            }

            catch (err) {
                console.log("err" + err);
            }

        }
        fetchData()


    })




    return ( 
        <>
        
        
        </>
     );
}

export default View;