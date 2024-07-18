

import { useState } from "react";
import axios from "axios";
import DonorCategory from "../DonorCategory";
import Footer from "../Footer";
import ReceiverHeader from "./ReceiverHeader";

function SearchDonor() {
    const [bgroup, setBgroup] = useState("");
    const [city, setCity] = useState("");
    const [donorData, setDonorData] = useState([]);

    const URL = "http://localhost:4000/receiver/searchDonor";

    const fetchData = async () => {
        try {
            console.log("blood group is " + bgroup);
            console.log("city is " + city);
            const params = { bloodGroup: bgroup, city: city }

            const response = await axios.get(URL, { params })
            setDonorData(response.data.donor_data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <>
            <ReceiverHeader />
            <div>
                <div>

                    <select className="form-control" onChange={(e) => { setBgroup(e.target.value) }} value={bgroup} name="bgroup" id="bgroup">
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                    <label htmlFor="city">Search by city:</label>
                    <input name="city" type="text" id="city" onChange={(e) => { setCity(e.target.value) }} value={city} placeholder="Enter the city" />
                    <button type="submit" onClick={handleSubmit}>Search</button>

                </div>
                <DonorCategory donordata={donorData} />
            </div>


            <Footer/>
        </>
    );
}

export default SearchDonor;
