import React from 'react';
import { Input } from 'antd';
import MasterCard from '../../Assets/masterCard.svg';
import VisaCard from '../../Assets/visaCard.png';
import { DatePicker, Space } from 'antd';
import { Checkbox, Switch } from 'antd';

const pricingStep4 = () => {


    function onDateChange(date, dateString) {
        console.log(date, dateString);
    }

    function onCheckRadioChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    function onSwitchChange(checked) {
        console.log(`switch to ${checked}`);
    }



    return (
        <>
            <div className="form-group">
                <div className="row country-addr">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="we-accept">We Accept</label><br />
                        <img src={MasterCard} alt="" />
                        <img src={VisaCard} alt="" />

                    </div>

                </div>

                <div className="row city-state">
                    <div className="col-6 fname">
                        <label className="text-start" htmlFor="nameOfCard">Name On Card</label>
                        <Input placeholder="Name On Card" />

                    </div>

                    <div className="col-6">
                        <label htmlFor="creditCardNumber">Credit Card Number</label>
                        <Input placeholder="Credit Card Number" />

                    </div>

                </div>

                <div className="row postal">
                    <div className="col-6 fname">

                        <div className="row">
                            <div className="col-8">
                                <label className="text-start" htmlFor="expDate">Expiry Date</label><br />
                                <Space direction="vertical">
                                    <DatePicker onChange={onDateChange} />
                                </Space>
                            </div>
                            <div className="col-4">
                                <label className="text-start" htmlFor="cvc">CVC</label>
                                <Input placeholder="CVC" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row auto-renew">
                    <label className="text-start" htmlFor="autoRenew">Auto Renew</label><br />

                </div>

                <div className="switch-wrapper">
                    <Switch defaultChecked onChange={onSwitchChange} />
                </div>


                <div className="row radio-check">
                    <Checkbox onChange={onCheckRadioChange}>
                        By checking this box. You agree to ERP’s terms and services and confirm you have read ERP’s privacy policy. You also agree to receive emails from ERP regarding product or service updates or any other marketing material. To ensure continuous service, your membership will be auto-renewed unless canceled.
                    </Checkbox>
                </div>


            </div>
        </>
    );
}

export default pricingStep4;