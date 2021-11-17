import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import { Steps, Button, message, Modal } from 'antd';
import PricingStep1 from './../../Components/PricingPlan/PricingStep1';
import PricingStep2 from '../../Components/PricingPlan/PricingStep2';
import PricingStep3 from './../../Components/PricingPlan/PricingStep3';
import PricingStep4 from '../../Components/PricingPlan/PricingStep4';
import ListTick from '../../Assets/summeryCardTickPricing.svg';
import PricingModelTick from '../../Assets/pricingModelTick.svg';
import { useParams } from "react-router-dom"
const ContactInformation = () => {

    const { id } = useParams();



    useEffect(() => {
        // api call

    }, [])
    // modal functions and states
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // switch state and dunction 
    const [switchState, setCSwitchState] = React.useState(1);
    const onSwitchChange = (checked) => {
        setCSwitchState(checked);
    };

    // inner steps header data
    const { Step } = Steps;
    const steps = [
        {
            title: 'First',
            content: 'First-content',
        },
        {
            title: 'Second',
            content: 'Second-content',
        },
        {
            title: 'third',
            content: 'third-content',
        },
        {
            title: 'Last',
            content: 'Last-content',
        },
    ];
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };


    //features list data
    const featuresList = [
        {
            title: 'All limited links',
            src: ListTick,
        },
        {
            title: 'Own analytic program',
            src: ListTick,
        },
        {
            title: 'Own analytic program',
            src: ListTick,
        },
        {
            title: 'Optimize Hashtags',
            src: ListTick,
        },
    ];

    return (
        <>
            <div className="contact-information-wrapper">
                <div className="contact-information-hero">
                    <p className="path text-white mb-0">Home / Pricing Plan / Contact Information</p>

                    <div className="row back-monthely mx-auto">
                        <div className="col-8 p-0 ">
                            <button className="btn p-0 bg-transparent text-start">Back</button>
                        </div>
                        <div className="col-4 ps-0 ">

                            <span className="text-white">Mothely</span>
                            <Switch defaultChecked onChange={onSwitchChange} />
                            <span className="text-white mx-2" >Yearly</span>
                            {switchState && <span className="text-white"><u> Save 30%</u></span>}

                        </div>
                    </div>

                    {/* steps portion  */}
                    <div className="row steps-wrapper mx-auto">
                        <div className="col-8 bg-white ps-0">


                            <div className="steps-content-wrapper">
                                <div className="steps-level">
                                    <Steps current={current}>
                                        {steps.map(item => (

                                            <Step key={item.title} title={item.title} />
                                        ))}
                                    </Steps>
                                </div>

                                <div className="steps-content">
                                    {
                                        steps[current] === steps[0] ? <PricingStep1 /> :
                                            steps[current] === steps[1] ? <PricingStep2 /> :
                                                steps[current] === steps[2] ? <PricingStep3 /> :
                                                    steps[current] === steps[3] ? <PricingStep4 /> : null
                                    }
                                </div>
                                
                                <div className="steps-action text-end">

                                    {current > 0 && (
                                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                            Back
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button type="primary" onClick={showModal}>
                                            Done
                                        </Button>

                                    )}
                                    <Modal className="transaction-success-modal" visible={isModalVisible} footer={null} onOk={handleOk} onCancel={handleCancel}>
                                        <div className="ant-model-content text-center">
                                            <img src={PricingModelTick} alt="" />
                                            <h1>Your Transaction is Successful</h1>
                                            <p>You have successfully subscribed to our "Business Plan". Your credentials has been sent to your email address <strong> bilal@gmail.com </strong></p>
                                            <Link to="/">
                                                <button className="btn-go-home">Go Home</button>
                                            </Link>

                                        </div>
                                    </Modal>



                                    {current < steps.length - 1 && (
                                        <Button type="primary" onClick={() => next()}>
                                            Next
                                        </Button>
                                    )}

                                </div>
                            </div>






                        </div>

                        <div className="col-4 border">
                            <div className="container bg-white border border-danger">
                                <div className="row mx-auto">
                                    <h1 className="fw-bold p-0 m-0">Order Summary</h1>
                                </div>
                                <div className="row mx-auto">
                                    <div className="d-flex p-0 justify-content-between">
                                        <div>
                                            <h1 className="fw-bold p-0 m-0">Business</h1>
                                        </div>
                                        <div>
                                            <h1 className="fw-bold ">SAR 250 <span>/ Year</span> </h1>
                                            <span className="float-end">You save 10%</span>

                                        </div>
                                    </div>

                                </div>
                                <div className="row mx-auto">
                                    <h6 className="fw-bold p-0 m-0">Features included in business plan.</h6>
                                    <ul className="list-unstyled p-0">

                                        {featuresList.map((item, index) => (
                                            <li key={index} >
                                                <img className="me-2" src={item.src} alt="" />
                                                {item.title}
                                            </li>
                                        ))}

                                    </ul>
                                </div>

                                <div className="row pricing-sum-wrapper mx-auto">
                                    <div className="container pricing-sum-content">
                                        <div className="">
                                            <h1 className="fw-bold">Price Summary</h1>
                                        </div>
                                        <hr className="mb-0" />
                                        <div className="row pricing-sum-content-val border-bottom-0 ">
                                            <div className="d-flex p-0 justify-content-between">
                                                <div>
                                                    <h1>Plan Price</h1>
                                                </div>
                                                <div>
                                                    <h1>SAR 250</h1>
                                                </div>
                                            </div>
                                            <div className="d-flex p-0 justify-content-between">
                                                <div>
                                                    <h1>VAT Total</h1>
                                                </div>
                                                <div>
                                                    <h1>SAR 10</h1>
                                                </div>
                                            </div>
                                            <div className="d-flex p-0 justify-content-between">
                                                <div>
                                                    <h1 className="fw-bold">Total Price</h1>
                                                </div>
                                                <div>
                                                    <h1 className="fw-bold">SAR 260</h1>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default ContactInformation;