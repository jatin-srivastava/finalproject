import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function View() {
    
    const [user, setUser] = useState([])
    const navigate = useNavigate

    const URL = "http://localhost:4000/admin/donor_view"

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


    },[])




    return ( 
        <>
        <AdminHeader/>
           
            <div className="main" style={{width:"98%" ,margin:"15px" }}>
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <tr>
                        <th style={{ border: "1px solid black" }}>name</th>
                        <th style={{ border: "1px solid black" }}>email</th>
                        <th style={{ border: "1px solid black" }}>phone</th>
                        <th style={{ border: "1px solid black" }}>blood group</th>
                        <th style={{ border: "1px solid black" }}>city</th>
                    </tr>
                    {
                        user.map((uf) => {
                            return (
                                <tr>
                                    <td style={{ border: "1px solid black" }}>{uf.name}</td>
                                    <td style={{ border: "1px solid black" }}>{uf.email}</td>
                                    <td style={{ border: "1px solid black" }}>{uf.phone}</td>
                                    <td style={{ border: "1px solid black" }}>{uf.bloodGroup}</td>
                                    <td style={{ border: "1px solid black" }}>{uf.city}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

            <Footer/>
        </>
    );
    }

export default View;