import React from 'react';
import photo2 from "../images/bloodtypes.jpg"
import "../css/style.css"

function BloodTypes() {
    return (
        <div className="row photo5 " >

            <div className="col-5 mb-5 mt-5">
                <img src={photo2} alt="" style={{ height: "100%", width: "100%", border: '3px solid red', borderRadius: "100%" }} />

            </div>




            <div className="container mt-5 mb-5 col-7 " >


                <div className="col-12 row">

                    <div className="accordion" id="accordionBloodDonation">
                        <div className="card " style={{}} >
                            <div className="" id="plasmaHeader">
                                <h2 className="mb-0">
                                    <button className="accordion-button collapsed h3 fw-bold " style={{}} type="button" data-bs-toggle="collapse" data-bs-target="#plasmaCollapse" aria-expanded="false" aria-controls="plasmaCollapse">
                                        Plasma
                                    </button>
                                </h2>
                            </div>
                            <div id="plasmaCollapse" className="accordion-collapse collapse" aria-labelledby="plasmaHeader" data-bs-parent="#accordionBloodDonation">
                                <div className="card-body text-">
                                    <p>Plasma is the yellow, liquid part of blood that carries red blood cells, white blood cells, and platelets throughout your body text-.</p>
                                    <p><strong>Who can donate?</strong></p>
                                    <p>You need to be 18-65 years old, weight 45kg or more and be fit and healthy.</p>
                                    <p><strong>User For?</strong></p>
                                    <p>Correction of severe anemia in a number of conditions and blood loss in case of child birth, surgery or trauma settings.</p>
                                    <p><strong>Lasts For?</strong></p>
                                    <p>Red cells can be stored for 42 days at 2-6 degree celsius.</p>
                                    <p><strong>How long does it take to donate?</strong></p>
                                    <p>15-30 minutes to donate, including the pre-donation check-up.</p>
                                    <p><strong>How often can I donate?</strong></p>
                                    <p>Male donors can donate again after 90 days and female donors can donate again after 120 days.</p>

                                </div>
                            </div>
                        </div>
                        <div className="card " style={{}}  >
                            <div className="" id="bloodHeader">
                                <h2 className="mb-0">
                                    <button className="accordion-button collapsed h3 fw-bold " style={{}} type="button" data-bs-toggle="collapse" data-bs-target="#bloodCollapse" aria-expanded="false" aria-controls="bloodCollapse">
                                        Packed Red Blood cells
                                    </button>
                                </h2>
                            </div>

                            <div id="bloodCollapse" className="accordion-collapse collapse" aria-labelledby="plasmaHeader" data-bs-parent="#accordionBloodDonation">
                                <div className="card-body text-">
                                    <p>Blood Collected straight from the donor into a blood bag and mixed with an anticoagulant is called as whole blood. This collected whole blood is then centrifuged and red cell, platelets and plasma are separated. The separated Red cells are mixed with a preservative to be called as packed red blood cells.</p>
                                    <p><strong>Who can donate?</strong></p>
                                    <p>You need to be 18-65 years old, weight 45kg or more and be fit and healthy.</p>
                                    <p><strong>Used For?</strong></p>
                                    <p>Correction of severe anemia in a number of conditions and blood loss in case of child birth, surgery or trauma settings.</p>
                                    <p><strong>Lasts For?</strong></p>
                                    <p>Red cells can be stored for 42 days at 2-6 degree celsius.</p>
                                    <p><strong>How long does it take to donate?</strong></p>
                                    <p>15-30 minutes to donate, including the pre-donation check-up.</p>
                                    <p><strong>How often can I donate?</strong></p>
                                    <p>Male donors can donate again after 90 days and female donors can donate again after 120 days.</p>

                                </div>
                            </div>
                        </div>






                        <div className="card " style={{}} >
                            <div className="" id="plateletHeader">
                                <h2 className="mb-0">
                                    <button className="accordion-button collapsed h3 fw-bold " style={{}} type="button" data-bs-toggle="collapse" data-bs-target="#plateletCollapse" aria-expanded="false" aria-controls="plateletCollapse">
                                        Platelet
                                    </button>
                                </h2>
                            </div>
                            <div id="plateletCollapse" className="accordion-collapse collapse" aria-labelledby="plateletHeader" data-bs-parent="#accordionBloodDonation">
                                <div className="card-body text-">
                                    <p>Platelets are small, irregularly shaped cell fragments in the blood that help form blood clots and control bleeding.</p>
                                    <p><strong>Who can donate?</strong></p>
                                    <p>You need to be 18-65 years old, weight 45kg or more and be fit and healthy.</p>
                                    <p><strong>User For?</strong></p>
                                    <p>Correction of severe anemia in a number of conditions and blood loss in case of child birth, surgery or trauma settings.</p>
                                    <p><strong>Lasts For?</strong></p>
                                    <p>Red cells can be stored for 42 days at 2-6 degree celsius.</p>
                                    <p><strong>How long does it take to donate?</strong></p>
                                    <p>15-30 minutes to donate, including the pre-donation check-up.</p>
                                    <p><strong>How often can I donate?</strong></p>
                                    <p>Male donors can donate again after 90 days and female donors can donate again after 120 days.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            );
}

            export default BloodTypes;


