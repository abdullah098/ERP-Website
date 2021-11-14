import React from 'react';
import Card from '../../Components/Common/Card';
import Store from '../../Assets/store.svg';
import Boxes from '../../Assets/boxes.svg';
import Sketch from '../../Assets/sketch (1).svg';
import Graph from '../../Assets/graph.svg';

const AboutUs = () => {

    const cards = [
        {
            title: 'Easy To Use',
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Store,
            // link: '/'
        },
        {
            title: 'Customer Focus',
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Sketch,
            // link: '/'
        },
        {
            title: 'Smart Solutions',
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Boxes,
            // link: '/'
        }
    ]

    const our_mission_ticks = [
        {
            discription: 'We provide best solution which include useful features in a very low price.',
            link: ''
        },
        {
            discription: 'Deliver on time & qualitative features to customer and create a family of happy & satisfied customers with long lasting relationship.',
            link: ''
        },
        {
            discription: 'Develop innovative and environment friendly solution to save business information in digital form.',
            link: ''
        }
    ]

    const values_we_provide = [
        {
            title: 'Quality',
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Store,
            // link: '/'
        },
        {
            title: 'Integrity',
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Sketch,
            // link: '/'
        },
        {
            title: 'Trust',
            description: 'This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records',
            image: Boxes,
            // link: '/'
        }
    ]


    return (
        <>
            <div className="about">
                <div className="about-us border border-danger">
                    <p className="path text-white mb-0">Home / About Us</p>

                    <div className="start-content text-center">

                        <h1 className="text-white fw-bold">About Us</h1>
                        <p className="text-white mb-0">This is the best digital tool for all your businesses which you operate online it covers Industries like construction, <br /> retail stores and gives you ease to get all the records in one place without worrying about.</p>

                        <hr className="mx-auto" />

                    </div>
                </div>


                <div className="our-vision ">
                    <h1 className="fw-bold ">Our Vision</h1>
                    <p>Our vision is to establish ourselves as any time value provider in the minds of our customers by providing innovative software solutions. We dream to be a trusted partner to all our customers and help them overcome their business challenges with our updated software. Our vision is to remove the hectic of our customers in their day to day business process and make their business process friendly to all the departments in their organization.</p>

                    <div className="row">
                        {cards.map((card, index) => (
                            <div className="col-4" key={index}>
                                <Card
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}


                                />
                            </div>
                        ))}
                    </div>

                    <div className="our-mission-wrapper">
                        <h1 className="fw-bold">Our Mission</h1>
                        <p>Our journey starts with our mission, which is persistent. It affirms our purpose as a company and serves as the standard against which we weigh our actions and decisions.</p>

                        <div className="ticks-wrapper">
                            {our_mission_ticks.map((tick, index) => (
                                <div className="d-flex mission" key={index}>
                                    <img className="border rounded-circle" src={tick.link} alt="img" />
                                    <h1 className="my-auto">{tick.discription}</h1>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="values-we-provode-wrapper">
                        <h1 className="fw-bold">Values We Provide</h1>
                        <p>Our journey starts with our mission, which is persistent. It affirms our purpose as a company and serves as the standard against which we weigh our actions and decisions.</p>


                        <div className="row">
                            {values_we_provide.map((values_we_provide, index) => (
                                <div className="col-4" key={index}>
                                    <Card
                                        title={values_we_provide.title}
                                        description={values_we_provide.description}
                                        image={values_we_provide.image}


                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                

                <div className="prism-wrapper ">

                    <div className="container-fluid p-0">
                        <div className="prism-content p-0">
                            <div className="row m-0">

                                <div className="col-6 p-0 ">
                                    <h1 className="fw-bold text-white">Why Prism ?</h1>
                                    <p>This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.</p>

                                    <button className="btn">Request Demo - It's free</button>

                                </div>
                                <div className="col-6 prism-image">
                                    <img src={Graph} alt="" />
                                </div>

                            </div>

                        </div>

                    </div>





                    {/* <div className="d-flex">
                        <div className="prism-content">
                            <h1 className="fw-bold text-white">Why Prism ?</h1>
                            <p>This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.</p>
                            <div className="flex-column">
                                <button className="btn">Request Demo - It's free</button>
                            </div>
                        </div>
                        <div className="prism-image">
                            <img src={Graph} alt="" />
                        </div>
                    </div> */}

                </div>

            </div>
        </>

    );
}

export default AboutUs;