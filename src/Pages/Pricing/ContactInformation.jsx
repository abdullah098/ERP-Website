import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import { Steps, Button, message } from 'antd';
import PricingStep1 from './../../Components/PricingPlan/PricingStep1';
import PricingStep2 from '../../Components/PricingPlan/PricingStep2';
import PricingStep3 from './../../Components/PricingPlan/PricingStep3';
import PricingStep4 from '../../Components/PricingPlan/PricingStep4';

const ContactInformation = () => {

    // switch state and dunction 
    const [switchState, setCSwitchState] = React.useState(1);
    const onSwitchChange = (checked) => {
        setCSwitchState(checked);
    };

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
                                {/* {steps[current] === steps[0] ? <div className="steps-content">hi 1</div> : null } */}




                                <div className="steps-action text-end">

                                    {current > 0 && (
                                        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                            Back
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                            Done
                                        </Button>
                                    )}



                                    {current < steps.length - 1 && (
                                        <Button type="primary" onClick={() => next()}>
                                            Next
                                        </Button>
                                    )}

                                </div>
                            </div>






                        </div>
                        
                        <div className="col-4 border">
                            <div className="container bg-white border">
                                <h1 className="fw-bold">Order Summary</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}

export default ContactInformation;