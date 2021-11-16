import React from 'react';
import { Input } from 'antd';

const pricingStep3 = () => {

    




    return (
        <>
            <div className="form-group">
                <div className="row country-addr">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="country">Country</label>
                        <Input placeholder="Enter your Country" />

                    </div>

                    <div className="col-6">
                        <label htmlFor="address">Address</label>
                        <Input placeholder="Enter your Address" />

                    </div>

                </div>

                <div className="row city-state">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="city">City</label>
                        <Input placeholder="Enter your City" />

                    </div>

                    <div className="col-6">
                        <label htmlFor="State">State</label>
                        <Input placeholder="Enter your Email" />

                    </div>

                </div>

                <div className="row postal">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="zipCode">Postal/Zip Code</label>
                        <Input placeholder="Enter your Zip Code" />

                    </div>

                    

                </div>

                
            </div>
        </>
    );
}

export default pricingStep3;