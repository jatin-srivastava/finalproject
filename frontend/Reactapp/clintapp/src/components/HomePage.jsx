import photo from '../images/banner1.jpg'
import photo1 from '../images/banner2.jpg'
import photo3 from '../images/banner3.jpg'
import "../css/homepage.css"
import photo33 from "../images/blood2.jpg"
import photo12 from "../images/b17.jpg"
import photo13 from "../images/b18.jpg"
import photo14 from "../images/blood.jpg"
import {NavLink} from 'react-router-dom'

function HomePage() {
  const mystyle = {
    img: {
      height: "550px",
      width: "100px"
    }
  }

  return (
    <>
    <div style={{backgroundColor:"lightgrey"}}>

    
      {/* start carousel */}
      
      <div id="carouselExampleCaptions" className="carousel slide container container1" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={photo} className="d-block w-100" alt="..." style={mystyle.img} />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{color:"black"}}>Donate Blood And Save lives</h3>
              <p style={{color:"black"}}>Register in life line portal to donate blood and save thousands of life </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo1} className="d-block w-100" alt="..." style={mystyle.img} />
            <div className="carousel-caption d-none d-md-block">
              <h3 style={{color:"black"}}>Get Safe And Healthy Blood</h3>
              
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo3} className="d-block w-100" alt="..." style={mystyle.img} />
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* end carousel */}

      <div className='container-fluid text-danger mt-5'>
  <div className='row'>
    <div className='col-md-6 align-self-center'>
      <h1 className='text-center mt-3 ' style={{fontSize:"4rem"}}>Who we are</h1>
      <p className='px-md-5 ' style={{fontSize:"25px"}}>
        Welcome to the Blood Life Line Portal! We're not just platform; we're lifeline connecting donors with recipients in need. Our mission is to revolutionize the blood donation process, making it easier and more efficient than ever before.
      </p>
    </div>
    <div className='col-md-6'>
      <img src={photo33} alt="Blood donation" className='img-fluid'/>
    </div>
  </div>
</div>



<div className="container mt-3">
	<div className="row">
		<div className="col-sm-4">

<div className="card">

    <img className="img-fluid" src={photo14} alt="Card image cap"/>


    <div className="card-body">
       
        <h4 className="card-title">Compatibility</h4>
        
        <p className="card-text">if you know about blood donation then click here to know more</p>
        <NavLink to="/compatibility" className="btn btn-primary">Know more</NavLink>
    </div>

</div>

		</div>
			<div className="col-sm-4">

<div className="card">
    <img className="img-fluid"  src={photo13}  alt="Card image cap"/>

    <div className="card-body">

        <h4 className="card-title">Types of Donations</h4>
  
        <p className="card-text">If you know about blood types click here know more</p>
        <NavLink to="/bloodTypes" className="btn btn-primary">Know more</NavLink>
    </div>

</div>

		</div>
			<div className="col-sm-4">
		    
<div className="card">


<img className="img-fluid" src={photo12} alt="Card image cap"/>

    <div className="card-body">
       
        <h4 className="card-title">Common disease</h4>
      
       
        <p className="card-text">click here to know Common disease </p>
        <NavLink to="/commonDisease" className="btn btn-primary">Know more</NavLink>
    </div>

</div>


		</div>
	</div>
</div>
<div className="color mt-4">
<div className="row ">
        <div className="col-5 m-5  ">
            <p className='text7'>Ready to Give Blood</p> 
          <NavLink className='p1' to="/Donor">Click Here To Donate Blood</NavLink> 
        </div>
        <div className="col-5 m-5  ">
            <p className='text7'>Do  you Want Blood</p>
            <NavLink className='p1' to="/Receiver">Receive Blood Now</NavLink> 
        </div>
        
        </div>
     </div>


      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ezafVzfJw60?si=MDk2bRLpwruWoIbD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}




      {/* faqs start */}
      <div className="container container1 mt-5">
        <h1 className="text-center mb-4">Blood Donation FAQs</h1>
        <div className="accordion" id="bloodDonationFAQsAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading1">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                How often can I donate blood?
              </button>
            </h2>
            <div id="faqCollapse1" className="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                You can donate whole blood every 56 days. However, the waiting period may vary depending on the type of donation and your health condition.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                Can I donate blood if I have  cold or flu?
              </button>
            </h2>
            <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                No, you should not donate blood if you have  cold, flu, or any other illness. You should wait until you have fully recovered and are feeling well before donating blood.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading3">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                How long does blood donation take?
              </button>
            </h2>
            <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                The entire process of blood donation typically takes about 45 minutes to an hour, including registration, medical screening, donation, and refreshments afterward.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading4">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                Is there any age limit for blood donation?
              </button>
            </h2>
            <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                In most countries, you must be at least 17 years old to donate blood. However, some countries may have different age requirements. There is often no upper age limit for blood donation as long as you are in good health.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading5">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                Who can donate blood?
              </button>
            </h2>
            <div id="faqCollapse5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                Generally, individuals who are in good health, weigh at least 110 pounds (50 kg), and are between the ages of 17 and 65 (or older, depending on local regulations) may be eligible to donate blood. Specific eligibility criteria may vary depending on the blood donation center and country.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading6">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse6" aria-expanded="false" aria-controls="faqCollapse6">
                How often can I donate blood?
              </button>
            </h2>
            <div id="faqCollapse6" className="accordion-collapse collapse" aria-labelledby="faqHeading6" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                Donation frequency depends on the type of donation and local regulations. For whole blood donations, individuals can typically donate every 56 days (8 weeks). For platelet donations, individuals can often donate more frequently, usually every 7 days up to 24 times per year.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading7">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse7" aria-expanded="false" aria-controls="faqCollapse7">
                Does donating blood hurt?
              </button>
            </h2>
            <div id="faqCollapse7" className="accordion-collapse collapse" aria-labelledby="faqHeading7" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                The sensation experienced during blood donation varies from person to person. Some individuals may feel slight pinch or prick when the needle is inserted, while others may not feel much at all. Discomfort is usually minimal, and many donors report feeling sense of satisfaction from helping others.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading8">
              <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse8" aria-expanded="false" aria-controls="faqCollapse8">
                Can I donate blood if I have tattoo or piercing?
              </button>
            </h2>
            <div id="faqCollapse8" className="accordion-collapse collapse" aria-labelledby="faqHeading8" data-bs-parent="#bloodDonationFAQsAccordion">
              <div className="accordion-body">
                Depending on local regulations, individuals may need to wait certain period of time after getting tattoo or piercing before being eligible to donate blood. This waiting period is typically around 3 to 12 months, depending on the location and circumstances of the tattoo or piercing.
              </div>
            </div>
          </div>
        </div>
      </div>  









      </div>
    </>
  );
}

export default HomePage;