import React, { useState } from 'react';
import { Input } from 'antd';
import PhoneInput from 'react-phone-input-2'
import { Select } from 'antd';
import Mobile from '../../Assets/mobile.svg';
import Email from '../../Assets/email.svg';
import Location from '../../Assets/location.svg';

const ContactUs = () => {


    const cointries = ['Pakistan', 'India', 'Saudia Arab', 'United States', 'England'];

    const [phone, setPhone] = useState();

    const { Option } = Select;
    console.log(Select);

    function onChange(value) {
        // console.log(`selected ${value}`);
    }

    function onBlur() {
        // console.log('blur');
    }

    function onFocus() {
        // console.log('focus');
    }

    function onSearch(val) {
        // console.log('search:', val);
    }



    const handlePhoneChange = (phone) => {
        if (phone === "") setPhone(null);
        else setPhone(phone);
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
                            <h1 className="fw-bold">Contact Us</h1>
                            <form className="request-demo-form ">
                                <div className="form-group">


                                    <div className="row name-email">
                                        <div className="col-6">
                                            <label htmlFor="name">Full Name</label>
                                            <Input placeholder="Enter your name" />

                                        </div>

                                        <div className="col-6">
                                            <label htmlFor="email">Email</label>
                                            <Input placeholder="Enter your Email" />

                                        </div>

                                    </div>


                                    <div className="row phone-country">
                                        <div className=" col-6">
                                            <label htmlFor="phone_number">Mobile Number</label>
                                            <PhoneInput
                                                country={''}
                                                value={phone}
                                                onChange={handlePhoneChange}
                                            />



                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="Country">Country</label>
                                            <br />
                                            <Select
                                                showSearch
                                                placeholder="Select a Country"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onFocus={onFocus}
                                                onBlur={onBlur}
                                                onSearch={onSearch}
                                                filterOption={(input, option) =>
                                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                }
                                            >

                                                {cointries.map((country, index) => (
                                                    <Option key={index} value={country}>{country}</Option>
                                                ))}
                                            </Select>

                                        </div>
                                    </div>


                                    <div className="row company-users">
                                        <div className="col-12">
                                            <label htmlFor="phone">Subject (Optional)</label>
                                            <Input placeholder="Subject" />
                                        </div>

                                    </div>

                                    <div className="row message">
                                        <div className="col-12">
                                            <label htmlFor="phone">Message</label>
                                            <Input placeholder="Message" />
                                        </div>

                                    </div>






                                    <div className="row reset-form text-end" >
                                        <a href="/">Reset from </a>
                                    </div>


                                    <button type="submit" className="btn btn-primary submit-btn">Submit</button>



                                </div>
                            </form>



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