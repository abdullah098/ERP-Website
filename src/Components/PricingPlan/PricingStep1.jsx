import React, { useState } from 'react';
import { Input } from 'antd';
import PhoneInput from 'react-phone-input-2'
import { Select } from 'antd';

const PricingStep1 = () => {


    // phone number state and function
    const [phone, setPhone] = useState();
    const handlePhoneChange = (phone) => {
        if (phone === "") setPhone(null);
        else setPhone(phone);
    }


    return (
        <>
            <div className="form-group">
                <div className="row fname-lname">
                    <div className="col-6 fname">
                        <label className="fw-bold" htmlFor="first_name">First Name</label>
                        <Input placeholder="First Name"/>

                    </div>

                    <div className="col-6">
                        <label className="fw-bold" htmlFor="last_name">Last Name</label>
                        <Input placeholder="Last Name"/>

                    </div>

                </div>

                <div className="row email-country">

                    <div className="col-6">
                        <label className="fw-bold" htmlFor="email">Email</label>
                        <Input placeholder="Email"/>


                    </div>


                    <div className=" col-6 phone">
                        <label className="fw-bold" htmlFor="phone_number">Mobile Number</label>
                        <PhoneInput
                            country={''}
                            value={phone}
                            onChange={handlePhoneChange}
                        />



                    </div>

                </div>
            </div>
        </>
    );
}

export default PricingStep1;