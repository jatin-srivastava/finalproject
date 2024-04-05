
import photo from '../images/contact.jpg'
import { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  const URL = "http://localhost:4000/contact"

  const [users, setUsers] = useState({
    name: '', email: '', phone: '', query: ''
  });

  const handelChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
  }

  const handelForm = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL, users)
      console.log(response.data);
      setUsers({ name: '', email: '', phone: '', query: '' });
    }

    catch (err) {
      console.log('err' + err);
    }

  }

  return (
    <div className=" row" >
      <div className='col-6' >
        <img  alt="" />
      </div>   

      <div className="container col-6 ">
        <h1>Contact Us</h1>
        <form action="" onSubmit={handelForm}>
          <div className="mb-3">

            <label for="name" className="form-label">Name</label>
            <input type="text" value={users.name} onChange={handelChange} className="form-control" id="name" name="name" required />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" value={users.email} onChange={handelChange} className="form-control" id="email" name="email" required />
          </div>
          <div className="mb-3">
            <label for="phone" className="form-label">Phone</label>
            <input type="tel" value={users.phone} onChange={handelChange} className="form-control" id="phone" name="phone" />
          </div>
          <div className="mb-3">
            <label for="query" className="form-label">Query</label>
            <textarea className="form-control" value={users.query} onChange={handelChange} id="query" name="query" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>




    </div>



  )
}
export default Contact
