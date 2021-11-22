import React, { useState } from 'react';
import { Select } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Input, Form, Button } from 'antd';

const RequestADemo = () => {

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
            <div className="request-demo">
                <h4 className="fw-bold" >Request Demo Form</h4>
                <p>For the prism demo fill the details below to get your demo.</p>

                <Form className="request-demo-form">
                    <div className="form-group">

                        <div className="d-flex">
                            <div className="flex-colum">
                                <label htmlFor="name">Name</label>

                                <Form.Item
                                    // label="Full Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your Name!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                {/* <Input placeholder="Enter your name" /> */}
                                {/* <input type="text" className="form-control" id="name" placeholder="Enter your name" /> */}
                            </div>

                            <div className="flex-colum">
                                <label htmlFor="email">Email</label>
                                <Form.Item
                                    // label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your Name!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                {/* <label htmlFor="email">Email</label>
                                <Input placeholder="Enter your Email" /> */}
                                {/* <input type="email" className="form-control" id="email" placeholder="Enter your email" /> */}
                            </div>

                        </div>

                        <div className="d-flex mt-0">
                            <div className="flex-colum">
                                <label htmlFor="phone_number">Mobile Number</label>
                                <PhoneInput
                                    country={''}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />
                                {/* <input type="text" className="form-control" id="phone_number" placeholder="" /> */}


                            </div>
                            <div className="flex-colum">
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

                        <div className="d-flex">
                            <div className="flex-colum">
                                <label htmlFor="company">Company</label>
                                <Form.Item
                                    // label="Company"
                                    name="company"
                                    rules={[{ required: true, message: 'Please input your Name!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                {/* <label htmlFor="phone">Campany</label>
                                <Input placeholder="Company" /> */}
                                {/* <input type="text" className="form-control" id="phone" placeholder="Enter your phone" /> */}


                            </div>
                            <div className="flex-colum">
                                <label htmlFor="no_users">Number of Users</label>
                                <Form.Item
                                    // label="Number of Users"
                                    name="userNumbers"
                                    rules={[{ required: true, message: 'Please input your Name!' }]}
                                >
                                    <Input />
                                </Form.Item>
                                {/* <label htmlFor="company">Number of Users</label>
                                <Input placeholder="# of Users" /> */}
                                {/* <input type="text" className="form-control" id="company" placeholder="Enter your company" /> */}
                            </div>
                        </div>



                        <div className="reset-form float-end mb-2" >
                            <a href="/">Reset from </a>
                        </div>
                        <br />
                        <div>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button className="submit-btn" type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>

                        {/* <button type="submit" className="btn btn-primary submit-btn">Submit</button> */}



                    </div>
                </Form>
            </div>
        </>
    );
}

export default RequestADemo;