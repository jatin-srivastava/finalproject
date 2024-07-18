import { useEffect, useState } from "react";
import Footer from "../Footer";
import ReceiverHeader from "./ReceiverHeader";
import axios from "axios";

function ReceiverInbox() {
    const [msgdata,setMsgdata] = useState([])
    const URL = "http://localhost:4000/receiver/receiverinbox"
    useEffect(()=>{
        const token_data = localStorage.getItem("Token_key")
        console.log(token_data);
        const fetchData = async () => {
            const params = {
                senderId: token_data
            }

            try {

                const response = await axios.get(URL, { params });
                console.log(response.data);
                setMsgdata(response.data)
                

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [])

    return ( 
        <>
        <ReceiverHeader/>
        <h1>this is receiver inbox</h1>
        <div className="container">
            <table style={{ padding: "5px", border: "1px solid black",  minWidth:"50%", maxWidth:"100%"}}>
            
                <thead>
                    <tr>
                        <th style={{padding:"5px" , border: "1px solid black" }}>Sender Id</th>
                        <th style={{padding:"5px" , border: "1px solid black" }}>Subject</th>
                        <th style={{padding:"5px" , border: "1px solid black" }}>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {msgdata.map((msg, index) => (
                        <tr key={index}>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{msg.senderId}</td>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{msg.subject}</td>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{msg.date}</td>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{msg.bloodGroup}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        
        <Footer/>
        </>
     );
}

export default ReceiverInbox;