import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import HomePage from './components/HomePage';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Layout from './components/Layout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminLogin.jsx';
import Receiver from './components/receiver/Receiver.jsx';
import Donor from './components/donor/Donor.jsx';
import AdminHome from './components/Admin/AdminHome';
import DonorHome from './components/donor/DonorHome';
import DonorLogin from './components/donor/DonorLogin.jsx';
import AllFeedback from './components/Admin/AllFeedback.jsx';
import AllContact from './components/Admin/AllContact.jsx';
import ReceiverHome from './components/receiver/ReceiverHome.jsx';
import ReceiverLogin from './components/receiver/ReceiverLogin.jsx';
import CampDetail from './components/Admin/CampDetail.jsx';
import UserEditProfile from './components/donor/UserEditProfile.jsx'
import ReceiverEditProfile from './components/receiver/ReceiverEditProfile.jsx'
import UpcomingEvents from './components/UpcomingEvents.jsx';
import ViewCamp from './components/Admin/ViewCamp.jsx';
import Compatibility from './components/Compatibility.jsx';
import BloodTypes from './components/BloodTypes.jsx';
import CommonDisease from './components/CommonDisease.jsx';
import DonorCompose from './components/donor/DonorCompose.jsx';
import ReceiverCompose from './components/receiver/ReceiverCompose.jsx';
import ViewDonorHome from './components/ViewDonorHome.jsx';
import DonorCategory from './components/DonorCategory.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/upcoming_event" element={<UpcomingEvents/>}/>
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/bloodTypes" element={<BloodTypes />} />
        <Route path="/commonDisease" element={<CommonDisease />} />
        <Route path="/viewDonorHome" element={<ViewDonorHome/>}/>
        <Route path='/donorCategory' element={<DonorCategory/>}/>
        
      </Route>


      <Route >
  
        <Route path='/admin_login' element={<AdminLogin />} />    
        <Route path='/AllFeedback' element={<AllFeedback />} />
        <Route path='/AllContact' element={<AllContact />} />
        <Route path='/Admin_home' element={<AdminHome />} />
        <Route path='/campDetail' element={<CampDetail/>}/>
        <Route path='/view_camp' element={<ViewCamp/>}/>


      </Route>
      <Route >
        <Route path='/DonorLogin' element={<DonorLogin />} />
        <Route path='/donor_home' element={<DonorHome />} />
        <Route path='/Donor' element={<Donor />} />
        <Route path='/useredit' element={<UserEditProfile/>}/>
        <Route path='/donorCompose' element={<DonorCompose/>}/>
      </Route>


      <Route >
      <Route path='/receiver' element={<Receiver />} />
      <Route path='/receiver_login' element={<ReceiverLogin />} />
        <Route path='/receiver_home' element={<ReceiverHome />} />
        <Route path='/receiveredit' element={<ReceiverEditProfile/>}/>
        <Route path='/receiverCompose' element={<ReceiverCompose/>}/>
      </Route>



    </>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);



