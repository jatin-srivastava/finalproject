import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AllContact() {
   
    const [usercontact, setUserContact] = useState([])
    const navigate = useNavigate

    const URL = "http://localhost:4000/admin/allcontact"

    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        if (!token_data) {
            navigate("/admin_login")
        }
        const fetchData = async () => {
            try {

                const response = await axios.get(URL)
                console.log(response.data);
                setUserContact(response.data)
            }

            catch (err) {
                console.log("err" + err);
            }

        }
        fetchData()


    })





    return (
        <>
         
            <AdminHeader />
            <h1>This is All Contact</h1>
            <div className="main">
               
                    <table style={{ border: "1px solid black" }}>
                        
                        <tr>
                            <th style={{ border: "1px solid black" }}>name</th>
                            <th style={{ border: "1px solid black" }}>query</th>
                        </tr>
                       {
                        usercontact.map((uf)=>{
                            return(
                                <tr>
                                <td style={{ border: "1px solid black" }}>{uf.name}</td>
                                <td style={{ border: "1px solid black" }}>{uf.query}</td>
                            </tr>
                            )
                        })
                       }
                    </table>
                
                
            </div>
 





            <Footer />
        </>
    );
}

export default AllContact;