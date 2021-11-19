
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Group 2070.svg';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import RequestADemo from './RequestADemo';

// render navigration bar component
const NavBar = () => {

    // STATES

    const [isModalVisible, setIsModalVisible] = useState(false);

    // HOOKS

    // METHODS


    const showModal = () => {
        setIsModalVisible(true);
    };

    // create a function to close the modal
    // const handleOk = () => {
    //     setIsModalVisible(false); // define the state of the modal
    //     this.setState({ loading: true });
    //     setTimeout(() => {
    //         this.setState({ loading: false, visible: false });
    //     }, 3000);
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <nav className="nav nav_style d-flex justify-content-evenly">

                <div className="logo d-flex justify-content-baseline">
                    <img src={logo} alt="" />
                    <p className="fw-bold">Prism</p>
                </div>


                <div className="nav-links-btn d-flex align-items-center">

                    <NavLink to="/home">Home</NavLink>

                    <NavLink to="/aboutUs">
                        About Us
                    </NavLink>

                    <NavLink to="/features">
                        Features
                    </NavLink>

                    <NavLink to="/pricing-plan">
                        Pricing Plan
                    </NavLink>

                    <NavLink to="/contactUs">
                        Contact Us
                    </NavLink>

                </div>


                <div classname="req-demo-btn" id="#req-demo-btn">

                    <Button className=" default-button btn bg-transparent text-white border border-white" onClick={showModal}>
                        Request Demo
                    </Button>
                    <Modal className="request-demo-model-wrapper" visible={isModalVisible} onCancel={handleCancel} footer={[

                    ]}>
                        <RequestADemo />
                    </Modal>
                </div>


                {/* ----------------mobile nav------------  */}
                
                <div>
                    <div className="container mx-auto border">
                        <div className="d-flex">
                            <img src="" alt="logo" />
                            <button>a</button>
                        </div>
                    </div>
                </div>






            </nav>
        </>
    );
}

export default NavBar;