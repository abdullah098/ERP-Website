
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { Modal, Button, Drawer } from 'antd';
import RequestADemo from './RequestADemo';
import FinalLogo from '../Assets/FinalLogo.svg';
import NavMenu from '../Assets/navMenu.svg';

// render navigration bar component
const NavBar = () => {

    // STATES

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMobileModalVisible, setIsmobileModalVisible] = useState(false);

    // HOOKS

    // METHODS


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const showMobileModal = () => {
        setIsmobileModalVisible(true);
    };
    const handleMobileCancel = () => {
        setIsmobileModalVisible(false);
    };


    // drawer 
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onCloseDrawer = () => {
        setVisible(false);
    };


    return (
        <>
            <nav className="nav nav_style d-flex justify-content-evenly">

                <div className="logo d-flex justify-content-baseline">
                    <img src={FinalLogo} alt="" />
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


                <div className="req-demo">

                    <button className="bg-transparent text-white border border-white" onClick={showModal}>
                        Request Demo
                    </button>
                    <Modal className="request-demo-model-wrapper" visible={isModalVisible} onCancel={handleCancel} footer={[

                    ]}>
                        <RequestADemo />
                    </Modal>
                </div>


                {/* ----------------mobile nav------------  */}

                <div className="mobile-nav border">
                    <div className="mobile-nav-content">
                        <img src={FinalLogo} alt="logo" />
                        <button className="btn bg-transparent" onClick={showDrawer}>
                            <img src={NavMenu} alt="" />
                        </button>

                        <Drawer className="drawer-custom" placement="right" onClose={onCloseDrawer} visible={visible} >
                            <div className="mobile-nav-links border d-flex flex-column">
                                <NavLink to="/home" onClick={onCloseDrawer}>
                                    Home
                                </NavLink>

                                <NavLink to="/aboutUs" onClick={onCloseDrawer}>
                                    About Us
                                </NavLink>

                                <NavLink to="/features" onClick={onCloseDrawer}>
                                    Features
                                </NavLink>

                                <NavLink to="/pricing-plan" onClick={onCloseDrawer}>
                                    Pricing Plan
                                </NavLink>

                                <NavLink to="/contactUs" onClick={onCloseDrawer}>
                                    Contact Us
                                </NavLink>
                            </div>




                            









                            <div className="req-demo-mobile text-center" onClick={onCloseDrawer}>

                                <button className="bg-transparent text-white border border-white" onClick={showMobileModal}>
                                    Request Demo
                                </button>
                                <Modal className="request-demo-model-wrapper" visible={isMobileModalVisible} onCancel={handleMobileCancel} footer={[

                                ]}>
                                    <RequestADemo />
                                </Modal>
                            </div>


                        </Drawer>

                    </div>

                </div>






            </nav>
        </>
    );
}

export default NavBar;