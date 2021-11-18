import React from 'react';
import { Switch } from 'antd';
import PricingCard from '../../Components/PricingPlan/PricingCard';
import PaperPlane from '../../Assets/paperPlane.svg';
import Brifcase from '../../Assets/brifcase.svg';
import Rocket from '../../Assets/rocket.svg';
import { Collapse } from 'antd';


const Pricing = () => {

    // pricing plan data for map
    const data = [
        {
            id: 1,
            img_src: PaperPlane,
            title: 'Starter Plan',
            price: '$ 9.99',
            description: 'Some of the basic feature is included',
            recomanded: false,
            features: [
                {
                    id: 1,
                    title: '2 GB of free space',
                    active: true,
                },
                {
                    id: 2,
                    title: '30 days of free service',
                    active: true,
                },
                {
                    id: 3,
                    title: '30 days of free support',
                    active: false,
                },
                {
                    id: 4,
                    title: 'Create 10 users',
                    active: false,
                },
                {
                    id: 5,
                    title: 'All analytics of business',
                    active: false,
                },
            ]
        },
        {
            id: 2,
            img_src: Brifcase,
            title: 'Business Plan',
            price: '$ 12.99',
            description: 'Some of the basic feature is included',
            recomanded: true,
            features: [
                {
                    id: 1,
                    title: '2 GB of free space',
                    active: true,
                },
                {
                    id: 2,
                    title: '30 days of free service',
                    active: true,
                },
                {
                    id: 3,
                    title: '30 days of free support',
                    active: true,
                },
                {
                    id: 4,
                    title: 'Create 10 users',
                    active: true,
                },
                {
                    id: 5,
                    title: 'All analytics of business',
                    active: false,
                },
            ]
        },
        {
            id: 3,
            img_src: Rocket,
            title: 'Enterprise Plan',
            price: '$ 15.99',
            description: 'Some of the basic feature is included',
            recomanded: false,
            features: [
                {
                    id: 1,
                    title: '2 GB of free space',
                    active: true,
                },
                {
                    id: 2,
                    title: '30 days of free service',
                    active: true,
                },
                {
                    id: 3,
                    title: '30 days of free support',
                    active: true,
                },
                {
                    id: 4,
                    title: 'Create 10 users',
                    active: true,
                },
                {
                    id: 5,
                    title: 'All analytics of business',
                    active: true,
                },
            ]
        },






    ]

    //faq collapes data for map
    const colapesData = [
        {
            key: 1,
            header: 'Some of the questions which is in your mind have mentioned below with answers',
            text: `This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records`
        },
        {
            key: 2,
            header: 'Some of the questions which is in your mind have mentioned below with answers',
            text: `This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records`
        },
        {
            key: 3,
            header: 'Some of the questions which is in your mind have mentioned below with answers',
            text: `This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records`
        }
    ]


    const { Panel } = Collapse;
    const callback = (key) => {
        console.log(key);
    }

    // switch on off
    const [switchState, setCSwitchState] = React.useState(1);
    const onSwitchChange = (checked) => {
        setCSwitchState(checked);
    };

    return (
        <>
            <div className="pricing-wrapper">
                {/* hero top  */}
                <div className="pricing-hero">
                    <div>
                        <div className="container p-0">
                            <p className="path text-white mb-0">Home / Pricing Plan</p>

                            <div className="start-content text-center">

                                <h1 className="text-white fw-bold">Pricing</h1>
                                <hr className="mx-auto m-0" />
                                <p className="text-white ">We offer different pricing plan options for users our pricing includes Starter, Business & Enterprise Plans.</p>

                                <div className="switch">
                                    <span className="text-white  mx-2">Mothely</span>
                                    <Switch defaultChecked onChange={onSwitchChange} />
                                    <span className="text-white mx-2" >Yearly</span>
                                    {switchState && <span className="text-white"><u>Save 30%</u></span>}
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

                {/* pricing card  */}
                <div className="pricing-card border">
                    <div>
                        <div className="container p-0">
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                                {data.map((item, index) => (
                                    <PricingCard data={item} />
                                ))}

                            </div>
                        </div>
                    </div>


                </div>

                {/* frequently asked questions  */}
                <div className="frequently-asked-wrapper">
                    <div>
                        <div className="container p-0">
                            <div className="frequently-asked-content">
                                <h1 className="fw-bold">Frequently Asked Questions</h1>
                                <p>Some of the questions which is in your mind have mentioned below with answers</p>


                                <Collapse defaultActiveKey={['1']} onChange={callback} ghost className="site-collapse-custom-collapse">

                                    {colapesData.map((item, index) => (
                                        <Panel header={item.header} key={item.key}>
                                            <p>{item.text}</p>
                                        </Panel>
                                    ))}

                                </Collapse>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default Pricing;