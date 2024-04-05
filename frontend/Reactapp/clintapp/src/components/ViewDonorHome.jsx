
import { useEffect, useState } from "react";
import axios from "axios";
import DonorCategory from "./DonorCategory";

function ViewDonorHome() {
    const [bgroup, setBgroup] = useState("");
    const [city, setCity] = useState("")
    const [donordata, setDonorData] = useState([])

    const URL = "http://localhost:4000/searchdonor"
    useEffect(() => {
        const fetchData = async ()=>{
            try{
                console.log("blood group is "+bgroup);
                console.log("city is "+city);
                const params = {bloodGroup:bgroup,city:city}
                // const params = {receiverid:token_data}
                const response= await axios.get(URL,{params})
                setDonorData(response.data.donor_data)
                console.log(response.data);

            }
            catch(err)
            {
                console.log(err);
            }
        }
        fetchData()

    }, [bgroup, city])



    return (
        <div>
            <div>

                    <label htmlFor="bgroup">Search by blood group:</label>
                    <input name="bloodGroup" type="text" id="bloodGroup" onChange={(e)=>{setBgroup(e.target.value)}} value={donordata.bgroup}  placeholder="Enter Blood group" />
<h2>or</h2>
                    <label htmlFor="city">Search by city:</label>
                    <input name="city" type="text" id="city" onChange={(e)=>{setCity(e.target.value)}} value={donordata.city} placeholder="Enter the city" />
                    <button type="submit">Search</button>

            </div>
            <DonorCategory donordata={donordata} />
        </div>
    );
}

export default ViewDonorHome;


