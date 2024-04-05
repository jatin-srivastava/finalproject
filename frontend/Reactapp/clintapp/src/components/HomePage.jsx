import photo from '../images/blood1.jpeg'
import photo1 from '../images/blood2.jpg'
import "../css/homepage.css"

function Content() {
  const mystyle = {
    img: {
      height: "550px",
      width: "100px"
    }
  }

  return (
    <>
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
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo1} className="d-block w-100" alt="..." style={mystyle.img} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={photo} className="d-block w-100" alt="..." style={mystyle.img} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
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

      <h1 className='text-center mt-5 mb-4 text-decoration-underline' >Who we are</h1>
      <p className='h5 container container1'>
        The Blood Life Line Portal is a revolutionary platform designed to streamline the process of blood donation and transfusion, bridging the gap between donors and recipients with unprecedented efficiency. By leveraging cutting-edge technology, this portal simplifies every aspect of the blood donation journey, from donor registration to the allocation of blood units to patients in need.

        At its core, the Blood Life Line Portal serves as a centralized hub where donors can register, schedule appointments, and track the journey of their contributions, while recipients can request blood units based on their specific requirements. Through intuitive interfaces and robust backend systems, the portal ensures seamless coordination and transparency at every step, ultimately saving lives and fostering a healthier community.

        By harnessing the power of data analytics and real-time tracking mechanisms, the portal optimizes the allocation of blood resources, minimizing wastage and maximizing the impact of every donation. Moreover, its transparent approach instills trust and confidence among donors, motivating more individuals to participate in this life-saving endeavor.

        In essence, the Blood Life Line Portal represents the convergence of compassion and technology, serving as a beacon of hope for those in need of blood transfusions. As it continues to evolve and expand its reach, this indispensable platform remains dedicated to its mission of making timely access to blood a reality for all.</p>

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
          Can I donate blood if I have a cold or flu?
        </button>
      </h2>
      <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#bloodDonationFAQsAccordion">
        <div className="accordion-body">
          No, you should not donate blood if you have a cold, flu, or any other illness. You should wait until you have fully recovered and are feeling well before donating blood.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="faqHeading3">
        <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
          How long does a blood donation take?
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
          The sensation experienced during blood donation varies from person to person. Some individuals may feel a slight pinch or prick when the needle is inserted, while others may not feel much at all. Discomfort is usually minimal, and many donors report feeling a sense of satisfaction from helping others.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="faqHeading8">
        <button className="accordion-button fw-bold  collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse8" aria-expanded="false" aria-controls="faqCollapse8">
          Can I donate blood if I have a tattoo or piercing?
        </button>
      </h2>
      <div id="faqCollapse8" className="accordion-collapse collapse" aria-labelledby="faqHeading8" data-bs-parent="#bloodDonationFAQsAccordion">
        <div className="accordion-body">
          Depending on local regulations, individuals may need to wait a certain period of time after getting a tattoo or piercing before being eligible to donate blood. This waiting period is typically around 3 to 12 months, depending on the location and circumstances of the tattoo or piercing.
        </div>
      </div>
    </div>
  </div>
  </div>










    </>
  );
}

export default Content;