import { useEffect, useState  } from "react";
import axios from 'axios'
import AdminHeader from "./AdminHeader";
import Footer from "../Footer";
import { useNavigate } from 'react-router-dom'


function AllFeedback() {
    const [userfeedback, setUserFeedback] = useState([])
    const navigate = useNavigate()

    const URL = "http://localhost:4000/admin/allfeedback"

    useEffect(() => {
  

        const token_data = localStorage.getItem("Token_key")
        if (!token_data) {
            navigate("/admin_login")
        }
        
        const fetchData = async () => {
            try {
                const response = await axios.get(URL)
                console.log(response.data);
                setUserFeedback(response.data)

            }
            catch (err) {
                console.log("err", err);
            }
        }
        fetchData()
    })

    return (

        <>
            <AdminHeader />
            <h1>This is All feedback</h1>
            <div className="row">
                {
                    userfeedback.map((uf) => {
                        return (
                            <div className="col-4">
                                <div className="card" style={{ "marginLeft": "20px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">Review:{uf.remark}</h5>
                                        <h5 className="card-title">Rating:{uf.rating}</h5>
                                        <h5 className="card-title">Posted By:{uf.name}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


            <Footer />
        </>
    );
}

export default AllFeedback;