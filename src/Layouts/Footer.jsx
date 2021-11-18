import React from 'react';
import logo from '../Assets/logoBlue.png';
import facebook from '../Assets/Social/facebook.svg';
import twitter from '../Assets/Social/twitter.svg';
import linkedin from '../Assets/Social/linkedin.svg';
import instagram from '../Assets/Social/insta.svg';
import youtube from '../Assets/Social/youtube.svg';

const Footer = () => {


    const socials = [facebook, twitter, linkedin, youtube, instagram];

    return (
        <>
            <footer className="footer">
                <div className="footer-end d-flex justify-content-around">
                    <div>
                        <div className="d-flex">
                            <img src={logo} alt="" />
                            <p className="fw-bold">Prism</p>
                        </div>
                        <div>
                            <p>This is the best digital tool for all your <br /> businesses which you operate online <br /> it covers Industries like construction, <br /> retail stores and gives you ease to <br /> get all the records in one place <br /> without worrying about.</p>
                        </div>
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="fw-bold" style={{ marginBottom: "16px" }}>Quick Link</li>
                            <li style={{ marginBottom: "14px" }}>Home</li>
                            <li style={{ marginBottom: "14px" }}>About</li>
                            <li style={{ marginBottom: "14px" }}>Our Services</li>
                            <li style={{ marginBottom: "14px" }}>Contact Us</li>
                            <li>Pricing Plan</li>
                        </ul>
                        {/* <h1 className="fw-bold" style={{ marginBottom: "16px" }}>Quick Link</h1>
                        <ul className="navbar-nav">
                            <li style={{ marginBottom: "14px" }}>Home</li>
                            <li style={{ marginBottom: "14px" }}>About</li>
                            <li style={{ marginBottom: "14px" }}>Our Services</li>
                            <li style={{ marginBottom: "14px" }}>Contact Us</li>
                            <li>Pricing Plan</li>
                        </ul> */}
                    </div>
                    <div>
                        <ul className="navbar-nav">
                            <li className="fw-bold" style={{ marginBottom: "16px" }}>Contact Information</li>
                            <li style={{ marginBottom: "14px" }}>JMM technologies Mubashir plaza</li>
                            <li style={{ marginBottom: "14px" }}>0900-78601</li>
                            <li style={{ marginBottom: "14px" }}>www.jmmtechnologies.ltd</li>
                            <li className="fw-bold" style={{ marginBottom: "14px" }}>Follow Us</li>
                            <li className="d-flex">

                                {
                                    // social icons with links
                                }

                                {socials.map((social, index) => (
                                    <li key={index}>
                                        <img src={social} alt="" key={index} />
                                    </li>
                                ))}

                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-end-bottom text-center text-white">
                    {/* <div className="d-flex text-center">
                        <div>
                            <p>Copyright © 2020 JMM Technologies. All rights reserved.</p>
                        </div>
                        <div className="float-end">
                            <p className="text-end">Terms & Conditions</p>
                        </div>

                    </div> */}
                    
                    <p>Copyright © 2020 JMM Technologies. All rights reserved.</p>
                    
                
                </div>
            </footer>
        </>
    );
}

export default Footer;