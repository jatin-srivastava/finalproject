import axios from "axios";
import { useState, useEffect } from "react";
import "../css/showstory.css";

function ShowStory() {
    const URL = "http://localhost:4000/showStory";
    const [story, setStory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL);
                console.log(response.data);
                setStory(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
        <div className="bg">
        <div className="container container1">
            <h1 className="text-center m-2 story">Story</h1>

            <div className="row">
                {story.map((a, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card card11 mb-4">
                            <div className="box-title1">
                                <h6 className="card-title1">Title: {a.title}</h6>
                            </div>
                            <div className="box-text1">
                                <p className="card-text1">Content: {a.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
    );
}

export default ShowStory;
