import React, { useState , useEffect } from 'react';
import Mobile from '../../Assets/mobile.svg';
import Email from '../../Assets/email.svg';
import Location from '../../Assets/location.svg';
import ContactForm from '../../Components/ContactUs/ContactFrom';
import ThankYouForContact from '../../Components/ContactUs/ThankYouForContact';
import { useHistory } from "react-router-dom";

const ContactUs = () => {

    

    let location = useHistory();;
    useEffect(() => {
        // console.log("hi");
        return location.listen(() => { 
            
          setThankYou(false)
        //   console.log("listen");
       }) 
      },[]);

    



    const [thankYou, setThankYou] = useState(false);
    const handleSubmit = (e) => {
        setThankYou(true);
    }

  

    return (
        <>
            <div className="contact-us-wrapper">

                {/* top hero  */}
                <div className="cuntact-us-hero">
                    <p className="path text-white mb-0">Home / Contact Us</p>

                    <div className="start-content text-center">

                        <h1 className="text-white fw-bold">Contact Us</h1>
                        <hr className="mx-auto m-0" />
                        <p className="text-white ">If you have any queries in your mind please send us a message or email us which is given below.</p>

                    </div>
                </div>


                {/* form  */}

                <div className="form-wraper">
                    <div className=" form-content row ">
                        <div className="col-8 bg-white ">
                            {thankYou ? <ThankYouForContact /> : <ContactForm handleSubmit={handleSubmit} />}
                        </div>


                        {/* right section  */}

                        <div className="col-4 text-center">
                            <h1 className="fw-bold" >Contact Information</h1>
                            <div className="d-flex location">
                                <div>
                                    <img src={Location} alt="add" />
                                </div>
                                <div className="text-start">
                                    <p>Mubashir Plaza Near Kips <br /> Academy, Abbotabad</p>
                                </div>
                            </div>
                            <div className="contact d-flex">
                                <div>
                                    <img src={Mobile} alt="add" />
                                </div>
                                <div className="text-start">
                                    <p>+92 343 102 329578 <br /> +92 343 102 329578</p>
                                </div>
                            </div>
                            <div className="email d-flex ">
                                <div>
                                    <img src={Email} alt="add" />
                                </div>
                                <div className="text-start">
                                    <p>erpadmin@erp.com <br /> erphead@erp.com</p>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;