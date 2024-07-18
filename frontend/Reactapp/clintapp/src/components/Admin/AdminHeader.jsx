import { NavLink, useNavigate } from 'react-router-dom'

function AdminHeader() {

  const navigate = useNavigate()
  const token_data = localStorage.getItem("Token_key")
  const logout = (e) => {
    e.preventDefault()


    if (!token_data) //if no value in token
    {
      navigate('/admin_login')
    }
    else {
      localStorage.removeItem('Token_key')
      navigate('/admin_login')

    }
  }

  return (
    <>


      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Your Website</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Admin_home">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/AllContact">Contact Us</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">View Users</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/view_donor">View Donors</NavLink></li>
                <li><NavLink className="dropdown-item" to="/receiver_view">View Receivers</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Appointment</NavLink>
              <ul className="dropdown-menu">
                <NavLink className="dropdown-item" to="/blood-donation-appointment">Give appointment</NavLink>
                <li><NavLink className="dropdown-item" to="/appointment_detail">Appointment Donor Detail</NavLink></li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/AllFeedback">Feedback</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Camp</NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/campDetail">Add Camp Detail</NavLink></li>
                <li><NavLink className="dropdown-item" to="/view_camp">View Camp</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Message
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/admin_compose">Compose</NavLink></li>
                <li><NavLink className="dropdown-item" to="/admin_inbox">Inbox</NavLink></li>
              </ul>
            </li>

          </ul> 
          <div className="position-relative">

          <button onClick={logout} type="submit" class="btn btn-dark end-0">Logout</button>
        </div>
        </div>
        
      </nav>
    </>
  );
}

export default AdminHeader;