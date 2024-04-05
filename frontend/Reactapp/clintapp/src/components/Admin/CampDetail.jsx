import { useState } from 'react';
import axios from 'axios';
import "../../css/campdetail.css";
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";



function CampDetail() {


    const URL = "http://localhost:4000/admin/campDetail";

    const [user, setUser] = useState({
        event_name: '', event_venue: '', event_description: '', event_date: ''
    })

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handelForm = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(URL, user)
            console.log(response.data);
            setUser({ 
                event_name: '', event_venue: '', event_description: '', event_date: ''
             })
        }
        catch (err) {
            console.log("err" + err);
        }
    }

    return (
        <>
        <AdminHeader/>

            <section class="vh-100 bg-image"
                style={{ "backgroundImage": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div class="container h-100">
                        <div class="row d-flex justify-content-center align-items-center h-100">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div class="card" style={{ "border-radius": "15px" }}>
                                    <div class="card-body p-5">
                                        <h2 class="text-uppercase text-center mb-5">Add Camp Detail</h2>

                                        <form onSubmit={handelForm}>

                                            <div class="form-outline mb-4">
                                                <input type="text" onChange={handleChange} id="form3Example1cg" name='event_name' class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example1cg">event_name</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="text" onChange={handleChange} id="form3Example3cg" name='event_venue' class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example3cg">event_venue</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="text" onChange={handleChange} id="form3Example4cg" name='event_description' class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example4cg">event_description</label>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <input type="date" onChange={handleChange} id="form3Example4cdg" name='event_date' class="form-control form-control-lg" />
                                                <label class="form-label" for="form3Example4cdg">event_date</label>
                                            </div>

                                            <div class="d-flex justify-content-center">
                                                <button type="submit"
                                                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<Footer/>
        </>
    );
}

export default CampDetail;