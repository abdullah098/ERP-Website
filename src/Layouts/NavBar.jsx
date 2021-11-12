
import { NavLink } from 'react-router-dom';
import logo from '../Assets/Group 2070.svg';
import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import RequestADemo from './RequestADemo';

const NavBar = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    









    return (
        <>
            <nav className="nav nav_style d-flex justify-content-between">
                <div className="logo d-flex justify-content-baseline">
                    <img src={logo} alt="" />
                    <p className="fw-bold">Prism</p>
                </div>


                <div className=" d-flex align-items-center">
                    {/* <div> */}

                    <NavLink to="/home">Home</NavLink>
                        {/* <NavLink to="/home">
                            Home
                        </NavLink> */}
                    {/* </div> */}
                    {/* <div> */}
                        <NavLink to="/aboutUs">
                            About Us
                        </NavLink>
                    {/* </div> */}
                    {/* <div> */}
                        <a href="a">Feature</a>
                    {/* </div> */}
                    {/* <div> */}
                        <a href="a">Pricing Plan</a>
                    {/* </div> */}
                    {/* <div> */}
                        <a href="a">Contact Us</a>
                    {/* </div> */}
                </div>


                <div>

                    <Button type="btn bg-transparent text-white border border-white" onClick={showModal}>
                        Request Demo
                    </Button>
                    <Modal visible={isModalVisible}  onCancel={handleCancel} footer={[
                        
                    ]}>
                        <RequestADemo />
                    </Modal>
                </div>
            </nav>
        </>
    );
}

export default NavBar;