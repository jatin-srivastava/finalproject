import { useEffect, useState } from "react";
import Footer from "../Footer";
import DonorHeader from "./DonorHeader";
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import  {NavLink}  from "react-router-dom";

function DonorInbox() {
    const [msg, setMsg] = useState([])
    const URL = "http://localhost:4000/donor/donorinbox"
    const MySwal = withReactContent(Swal)

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
            <DonorHeader />

          
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

export default DonorInbox;