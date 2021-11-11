import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Group 2070.svg';

const NavBar = () => {
    return (
        <>
            <nav className="nav nav_style d-flex justify-content-between">
                <div className="logo d-flex justify-content-baseline">
                    <img src={logo} alt="" />
                    <p className="fw-bold">Prism</p>
                </div>


                <div className=" d-flex align-items-center">
                    <div>
                        <NavLink to="/home">
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/aboutUs">
                            About Us
                        </NavLink>
                    </div>
                    <div>
                        <a href="a">Feature</a>
                    </div>
                    <div>
                        <a href="a">Pricing Plan</a>
                    </div>
                    <div>
                        <a href="a">Contact Us</a>
                    </div>
                </div>


                <div>
                    <button className="btn bg-transparent text-white border border-white">Request Demo</button>
                </div>
            </nav>
        </>
    );
}

export default NavBar;