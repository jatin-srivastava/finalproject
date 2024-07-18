import { NavLink } from 'react-router-dom'

const Navbar=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg " >
  <div className="container-fluid">
    <NavLink className="navbar-brand fw-bold display-6" to="#">Life Line Portal</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsscrollheight: "100px;"}}>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/HomePage"> <i className="fas fa-home"></i></NavLink>
        </li>

                
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/viewDonorHome">Search Blood</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Registration</NavLink>
          <ul className="dropdown-menu">
          <li className="nav-item"><NavLink className="nav-link" to="/Donor">Donor</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/Receiver">Receiver</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Login
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/DonorLogin">Donor Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="/receiver_login">Receiver Login</NavLink></li>
            <li><NavLink className="dropdown-item" to="/admin_login">Admin Login</NavLink></li>
          </ul>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link" to="/showStory">Show story</NavLink>
        </li>
        
        <li className="nav-item">
        <NavLink className="nav-link" to="/upcoming_event">Camp Detail</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More About Blood
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/compatibility">Compatibility</NavLink></li>
            <li><NavLink className="dropdown-item" to="/bloodTypes">Blood Donation types</NavLink></li>
            <li><NavLink className="dropdown-item" to="/commonDisease">Common diseases</NavLink></li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</>

    )
}

export default Navbar