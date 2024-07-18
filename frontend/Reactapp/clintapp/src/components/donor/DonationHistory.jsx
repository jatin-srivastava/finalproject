import { useState } from "react";
import Footer from "../Footer";
import DonorHeader from "./DonorHeader";
import axios from "axios";

function DonationHistory() {
    const [history, setHistory] = useState([])
    const URL = "http://localhost:4000/donor/donor_history"
    useState(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setHistory(response.data);
            } catch (err) {
                console.log("Error:", err);
            }

        };
        fetchData()
    }, [])

    return (
        <>
            <DonorHeader />
            <h1 className="text-center">Donation History</h1>
            <div className="main container">
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid black" }}>Name</th>
                            <th style={{ border: "1px solid black" }}>Email</th>
                            <th style={{ border: "1px solid black" }}>Phone</th>
                            <th style={{ border: "1px solid black" }}>Age</th>
                            <th style={{ border: "1px solid black" }}>Blood Group</th>
                            <th style={{ border: "1px solid black" }}>Unit</th>
                            <th style={{ border: "1px solid black" }}>Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {history.map((uf, index) => (
                            <tr key={index}>

                                <td style={{ border: "1px solid black" }}>{uf.name} </td>
                                <td style={{ border: "1px solid black" }}>{uf.email} </td>
                                <td style={{ border: "1px solid black" }}>{uf.phone} </td>
                                <td style={{ border: "1px solid black" }}>{uf.age} </td>
                                <td style={{ border: "1px solid black" }}>{uf.bloodGroup} </td>
                                <td style={{ border: "1px solid black" }}>{uf.unit}</td>
                                <td style={{ border: "1px solid black" }}>{uf.date}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            <Footer />
        </>
    );
}

export default DonationHistory;