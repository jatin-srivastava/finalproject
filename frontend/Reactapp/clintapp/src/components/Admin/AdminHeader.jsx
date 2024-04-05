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
              <NavLink className="nav-link" to="#">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/AllContact">Contact Us</NavLink>
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
                <li><NavLink className="dropdown-item" to="#">Compose</NavLink></li>
                <li><NavLink className="dropdown-item" to="#">Inbox</NavLink></li>
              </ul>
            </li>

          </ul>

          <form className="d-flex justify-content-end">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div className="position-relative">

          <button onClick={logout} type="submit" class="btn btn-dark end-0">Logout</button>
        </div>
      </nav>







    </>
  );
}

export default AdminHeader;