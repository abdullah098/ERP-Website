import React, { useState } from 'react';
import { Input } from 'antd';
import PhoneInput from 'react-phone-input-2'
import { Select } from 'antd';

const ContactForm = (data) => {

    const { handleSubmit } = data;

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



    // const [thankYou, setThankYou] = useState(false);
    // const handleSubmit = (e) => {
    //     // e.preventDefault();
    //     setThankYou(true);
    // }








    return (<>

        {/* {thankYou ? <div className="thank-you"> hi </div> : <div>bye</div>}
        <button type="submit" className="btn btn-primary submit-btn" onClick={handleSubmit}>Submit</button> */}


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
                        <Input className="message-text" placeholder="Message" />
                    </div>

                </div>






                <div className="row reset-form text-end" >
                    <a href="/">Reset from </a>
                </div>


                <button type="submit" className="btn btn-primary submit-btn" onClick={handleSubmit} >Submit</button>



            </div>
        </form>




    </>);
}

export default ContactForm;