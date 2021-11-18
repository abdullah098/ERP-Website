import React from 'react';
import { Input } from 'antd';
import { Select } from 'antd';

const pricingStep2 = () => {

    const cointries = ['Pakistan', 'India', 'Saudia Arab', 'United States', 'England'];
    const { Option } = Select;

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }




    return (
        <>
            <div className="form-group">
                <div className="row company-branch">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="company">Company</label>
                        <Input placeholder="Enter your name" />

                    </div>

                    <div className="col-6">
                        <label htmlFor="numberOfBranches">Number Of Branches</label>
                        <Input placeholder="Number Of Branches" />

                    </div>

                </div>

                <div className="row user-position">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="numberOfUsers">Number Of Users</label>
                        <Input placeholder="Number Of Users" />

                    </div>

                    <div className="col-6">
                        <label htmlFor="position">Position</label>
                        <Input placeholder="Position" />

                    </div>

                </div>

                <div className="row cr-customer">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="crNumber">CR Number</label>
                        <Input placeholder="CR Number" />

                    </div>

                    <div className="col-6">
                        <label htmlFor="numberOfCustomers">Number Of Customers</label>
                        <Input placeholder="Number Of Customers" />

                    </div>

                </div>

                <div className="row supplies-businessType">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="numberOfSupplies">Number Of Suppliers</label>
                        <Input placeholder="Number Of Suppliers" />

                    </div>

                    <div className="col-6 select-business-type">
                        <label htmlFor="businessType">Business Type</label><br />
                        <Select
                            showSearch
                            placeholder="Business Type"
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
            </div>
        </>
    );
}

export default pricingStep2;