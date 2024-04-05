// import React, { useEffect, useState } from "react";
// import axios from "axios";

function DonorCategory(props) {
    const {donordata} = props;
    // const [donorData, setDonorData] = useState([]);

    // const URL = "http://localhost:4000/donordetail";

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(URL);
    //             console.log(response.data);
    //             setDonorData(response.data);
    //         } catch (err) {
    //             console.log("err", err);
    //         }
    //     };
    //     fetchData();
    // }, []);



    return (
        <>
            <h1>This is donor category</h1>

            <table style={{padding:"5px" , border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th style={{padding:"5px" , border: "1px solid black" }}>Name</th>
                        <th style={{padding:"5px" , border: "1px solid black" }}>Phone</th>
                        <th style={{padding:"5px" , border: "1px solid black" }}>City</th>
                        <th style={{padding:"5px" , border: "1px solid black" }}>Blood Group</th>
                    </tr>
                </thead>
                <tbody>
                    {donordata.map((donor, index) => (
                        <tr key={index}>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{donor.name}</td>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{donor.phone}</td>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{donor.city}</td>
                            <td style={{padding:"5px" , border: "1px solid black" }}>{donor.bloodGroup}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default DonorCategory;
