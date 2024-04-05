import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function DonorHeader() {
    const navigate = useNavigate();
    const token_data = localStorage.getItem("Token_key");

    const logout = (e) => {
        e.preventDefault();
        if (!token_data) {
            navigate('/DonorLogin');
        } else {
            localStorage.removeItem('Token_key');
            navigate('/DonorLogin');
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Your Website</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="#">Contact</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Message
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="/donorCompose">Compose</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="#">Inbox</NavLink></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button onClick={logout} type="button" className="btn btn-dark">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default DonorHeader;
