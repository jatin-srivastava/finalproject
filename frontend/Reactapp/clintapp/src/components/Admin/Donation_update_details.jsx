import React, { useEffect, useState } from "react";
import axios from "axios";

function DonationUpdateDetail() {
    const [users, setUsers] = useState([]);
    const [unit, setUnit] = useState("");
    const [date, setDate] = useState("");
    const [id, setId] = useState("");

    const URL = "http://localhost:4000/admin/donation_update_detail";
    const Edit_URL = "http://localhost:4000/admin/donation_update";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                setUsers(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    const handleChange = (e, updateId) => {
        const { name, value } = e.target;
        if (name === "unit") {
            setUnit(value);
        } else if (name === "date") {
            setDate(value);
        }
        setId(updateId);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(Edit_URL, { id, unit }, { id, date });

            console.log(response.data);
            // console.log(response2.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="main">
            <table style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black" }}>sender id</th>
                        <th style={{ border: "1px solid black" }}>name</th>
                        <th style={{ border: "1px solid black" }}>email</th>
                        <th style={{ border: "1px solid black" }}>phone</th>
                        <th style={{ border: "1px solid black" }}>blood group</th>
                        <th style={{ border: "1px solid black" }}>unit</th>
                        <th style={{ border: "1px solid black" }}>date</th>
                        <th style={{ border: "1px solid black" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return(
                            <tr key={user._id}>
                            <td style={{ border: "1px solid black" }}>{user.senderId}</td>
                            <td style={{ border: "1px solid black" }}>{user.name}</td>
                            <td style={{ border: "1px solid black" }}>{user.email}</td>
                            <td style={{ border: "1px solid black" }}>{user.phone}</td>
                            <td style={{ border: "1px solid black" }}>{user.bloodGroup}</td>
                            <td style={{ border: "1px solid black" }}>
                                <input
                                    onChange={(e) => handleChange(e, user._id)}
                                    name="unit"
                                    type="number"
                                />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <input
                                    onChange={(e) => handleChange(e, user._id)}
                                    name="date"
                                    type="date"
                                />
                            </td>
                            <td style={{ border: "1px solid black" }}>
                                <button type="submit" onClick={handleSubmit}>Update</button>
                            </td>
                        </tr>
                        )
                    }
                       
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DonationUpdateDetail;
