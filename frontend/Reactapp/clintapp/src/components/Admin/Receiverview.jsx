import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import axios from "axios"

function Receiverview() {
    const [view, setView] = useState([])

    const URL = "http://localhost:4000/admin/receiver_view"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL)
                console.log(response.data);
                setView(response.data)

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData()

    }, [])


    return (
        <>
            <AdminHeader />


            <h1>this is receiver view</h1>
            <div className="main" style={{ width: "98%", margin: "15px" }}>
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <tr>
                        <th style={{ border: "1px solid black" }}>name</th>
                        <th style={{ border: "1px solid black" }}>email</th>
                        <th style={{ border: "1px solid black" }}>phone</th>

                    </tr>
                    {
                        view.map((uf) => {
                            return (
                                <tr>
                                    <td style={{ border: "1px solid black" }}>{uf.name}</td>
                                    <td style={{ border: "1px solid black" }}>{uf.email}</td>
                                    <td style={{ border: "1px solid black" }}>{uf.phone}</td>

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

export default Receiverview;