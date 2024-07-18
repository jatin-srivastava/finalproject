import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllContact() {
    const [usercontact, setUserContact] = useState([]);
    const navigate = useNavigate();
    
    const [acname,setAcName]=useState("")
    useEffect(()=>{
        const token_data=localStorage.getItem("Token_key")
        console.log(`token data is  ${token_data}`);
        if (!token_data) // if no value in token data  it means user has not login
        {
            navigate('/admin_login')
        }
        setAcName(token_data)

    })

    const URL = "http://localhost:4000/admin/allcontact";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setUserContact(response.data);
            } catch (err) {
                console.log("Error:", err);
            }
        };
        
        const token_data = localStorage.getItem("Token_key");
        if (!token_data) {
            navigate("/admin_login");
        } else {
            fetchData();
        }
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <>
            <AdminHeader />
            <h1>This is All Contact</h1>
            <div className="main container">
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black" }}>Name</th>
                            <th style={{ border: "1px solid black" }}>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usercontact.map((uf, index) => (
                            <tr key={index}>
                                <td style={{ border: "1px solid black" }}>{uf.name}</td>
                                <td style={{ border: "1px solid black" }}>{uf.query}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default AllContact;
