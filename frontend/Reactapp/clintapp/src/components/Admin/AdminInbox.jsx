import AdminHeader from "./AdminHeader.jsx"
import Footer from "../Footer.jsx"
import axios from 'axios'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function AdminInbox() {
    const [msg, setMsg] = useState([])
    const URL = "http://localhost:4000/admin/admininbox"
    const MySwal = withReactContent(Swal)
    
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

    useEffect(() => {
        const token_data = localStorage.getItem("Token_key")
        console.log(token_data);


        const fetchData = async () => {
            const params = {
                senderId: token_data
            }

            try {

                const response = await axios.get(URL, { params });
                console.log(response.data);
                setMsg(response.data)
                

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return (
        <>
            <AdminHeader/>

          
            <div className="container">
            <table style={{ padding: "5px", border: "1px solid black",  minWidth:"50%", maxWidth:"100%"}}>
                <thead>
                    <tr>
                        <th style={{ padding: "5px", border: "1px solid black" }}>Sender Id</th>
                        <th style={{ padding: "5px", border: "1px solid black" }}>Subject</th>
                        <th style={{ padding: "5px", border: "1px solid black" }}>Date</th>

                    </tr>
                </thead>
                <tbody>
                    {msg.map((msg, index) => (
                        <tr key={index}>
                            <td style={{ padding: "5px", border: "1px solid black" }}>{msg.senderId}</td>
                            <td style={{ padding: "5px", border: "1px solid black" }}>{msg.subject}</td>
                            <td style={{ padding: "5px", border: "1px solid black" }}>{msg.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>



 

            <Footer />
        </>
    );
}

export default AdminInbox;