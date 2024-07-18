import axios from "axios";
import { useState } from "react";
import DonorHeader from "./DonorHeader";
import Footer from "../Footer";
import "../../css/story.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Story() {
    const URL = "http://localhost:4000/donor/share_story";
    const token_data = localStorage.getItem("Token_key");
    const [users, setUsers] = useState({
        donorId: token_data,
        title: "",
        content: "",
        date: new Date().toISOString()
    });
    const MySwal = withReactContent(Swal);

    const handleChange = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, users);
            console.log(response.data);
            setUsers({ ...users, title: "", content: "" });
            Swal.fire({
                title: "Story submitted",
                text: response.data,
                icon: "success"
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
        <div className="bg111">
            <DonorHeader />
            
            <div className="story-container">
                <h1 className="story-title">Share Your Story</h1>
                <form onSubmit={handleSubmit} className="story-form">
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" placeholder="Enter title" value={users.title} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content:</label>
                        <textarea name="content" placeholder="Enter Content" value={users.content} onChange={handleChange} className="form-control" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
           
            <Footer />
            </div>
        </>
    );
}

export default Story;
