import React from 'react';
import ThankYouForReaching from '../../Assets/thankyouForReaching.svg';

const ThankYouForContact = () => {
    return (
        <>
            <div className="thank-you-for-contact text-center">
                <img src={ThankYouForReaching} alt="" />
                <h1 className="fw-bold">Thanks for reaching out</h1>
                <h2 className="fw-bold">Your message has been submitted</h2>
                <h2 className="mb-0">Our team will get back to you soon</h2>
                <p className="mt-2">Your message will be overlooked and you will be contacted <br />from our department within 24 hours.</p>
                
            </div>
        </>
    );
}

export default ThankYouForContact;