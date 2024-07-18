import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './components/About';
import HomePage from './components/HomePage';
import Feedback from './components/receiver/Feedback.jsx';
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
import SearchDonorHome from './components/SearchDonorHome.jsx';
import DonorCategory from './components/DonorCategory.jsx';
import SearchDonor from './components/receiver/SearchDonor.jsx';
import DonorInbox from './components/donor/DonorInbox.jsx';
import ReceiverInbox from './components/receiver/ReceiverInbox.jsx';
import Story from './components/donor/Story.jsx';
import ShowStory from './components/ShowStory.jsx';
import BloodDonationApointment from './components/Admin/BloodDonationAppointment.jsx';
import AppointmentView from './components/donor/AppointmentView.jsx';
import DonationRegistration from './components/donor/DonationRegistration.jsx';
import Appoint_DonorDetail from './components/Admin/Appoint_DonorDetails.jsx';
import Donoation_update_detail from './components/Admin/Donation_update_details.jsx';
import Donorview from './components/Admin/Donorview.jsx'
import DonationHistory from './components/donor/DonationHistory.jsx';
import Receiverview from './components/Admin/Receiverview.jsx';
import AdminCompose from './components/Admin/AdminCompose.jsx';
import AdminInbox from './components/Admin/AdminInbox.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<App />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/upcoming_event" element={<UpcomingEvents />} />
        <Route path="/compatibility" element={<Compatibility />} />
        <Route path="/bloodTypes" element={<BloodTypes />} />
        <Route path="/commonDisease" element={<CommonDisease />} />
        <Route path="/viewDonorHome" element={<SearchDonorHome />} />
        <Route path='/donorCategory' element={<DonorCategory />} />
        <Route path='/showStory' element={<ShowStory/>}/>

      </Route>


      <Route >

        <Route path='/admin_login' element={<AdminLogin />} />
        <Route path='/AllFeedback' element={<AllFeedback />} />
        <Route path='/AllContact' element={<AllContact />} />
        <Route path='/Admin_home' element={<AdminHome />} />
        <Route path='/campDetail' element={<CampDetail />} />
        <Route path='/view_camp' element={<ViewCamp />} />
        <Route path='/blood-donation-appointment' element={<BloodDonationApointment/>}/>
        <Route path='/appointment_detail' element={<Appoint_DonorDetail/>}/>
        <Route path='/donation_update' element={<Donoation_update_detail/>}/>
        <Route path='/view_donor' element={<Donorview/>}/>
        <Route path='/receiver_view' element={<Receiverview/>}/>
        <Route path='/admin_compose' element={<AdminCompose/>}/>
        <Route path='/admin_inbox' element={<AdminInbox/>}/>

        
      </Route>
      <Route >
        <Route path='/DonorLogin' element={<DonorLogin />} />
        <Route path='/donor_home' element={<DonorHome />} />
        <Route path='/Donor' element={<Donor />} />
        <Route path='/useredit' element={<UserEditProfile />} />
        <Route path='/donorCompose' element={<DonorCompose />} />
        <Route path='/donor-inbox' element={<DonorInbox />} />
        <Route path='/share_story' element={<Story/>}/>
        <Route path='/appointment_view' element={<AppointmentView/>}/>
        <Route path='/bloodDonation' element={<DonationRegistration/>}/>
        <Route path='/donor_history' element={<DonationHistory/>}/>
        </Route>


      <Route >
        <Route path='/receiver' element={<Receiver />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path='/receiver_login' element={<ReceiverLogin />} />
        <Route path='/receiver_home' element={<ReceiverHome />} />
        <Route path='/receiveredit' element={<ReceiverEditProfile />} />
        <Route path='/receiverCompose' element={<ReceiverCompose />} />
        <Route path='/searchDonor' element={<SearchDonor />} />
        <Route path='/receiver-inbox' element={<ReceiverInbox/>}/>
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



