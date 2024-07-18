import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ReceiverHeader() {
    const navigate = useNavigate();
    const token_data = localStorage.getItem("Token_key");

    const logout = (e) => {
        e.preventDefault();
        if (!token_data) {
            navigate("/receiver_login");
        } else {
            localStorage.removeItem('Token_key');
            navigate("/receiver_login");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/receiver_home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feedback">Feedback</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/searchDonor">Search donor</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Message
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/receiverCompose">Compose</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/receiver-inbox">Inbox</NavLink></li>
                            </ul>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-light my-2 my-sm-0 logout-btn" onClick={logout} type="submit">Logout</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default ReceiverHeader;
