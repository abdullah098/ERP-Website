import React from 'react';
import Cards from './../../Components/Features/Cards';
import Store from '../../Assets/store.svg';
import { Tabs } from 'antd';
import Slider from "react-slick";

const Features = () => {

    const { TabPane } = Tabs;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    const cards = [
        {
            title: 'Sales Information',
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            img: Store
        },
        {
            title: 'Account Management',
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            img: Store
        },
        {
            title: 'Employee Management',
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            img: Store
        },
        {
            title: 'Help Center',
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            img: Store
        },
        {
            title: 'Asset Management',
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            img: Store
        },
        {
            title: 'Purchase History',
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            img: Store
        }
    ];





    return (
        <>
            <div className="features-wrapper">
                <div className="features-hero">
                    <p className="path text-white mb-0">Home / Features</p>

                    <div className="start-content text-center">

                        <h1 className="text-white fw-bold">Features</h1>
                        <p className="text-white mb-0">This is the best digital tool for all your businesses which you operate online it covers Industries like construction, <br /> retail stores and gives you ease to get all the records in one place without worrying about.</p>

                        <hr className="mx-auto" />

                    </div>
                </div>



                <div className="comprehensive-overview">
                    <div className="row">
                        <div className="col-4">
                            <h1 className="fw-bold m-0">A Comprehensive Overview Of Our</h1>
                            <h1 className="h1-features fw-bold m-0">Features</h1>

                            <p>This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.</p>

                            <a href="/">Explore All</a>

                        </div>
                        <div className="col-8">
                            <div className="row">
                                {cards.map((card, index) => (
                                    <div className="col-6 border">
                                        <Cards key={index}
                                            title={card.title}
                                            description={card.description}
                                            img={card.img}
                                        />
                                    </div>
                                ))}


                                {/* <div className="col-6 border">
                                    <Cards />
                                </div>
                                <div className="col-6 ">
                                    <Cards />
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>



                <div className="dashboard-features-wrapper">
                    <h1 className="text-center fw-bold">Breakdown Of Dashboard Features</h1>

                    <div className="tabs-wrapper">
                        <Tabs defaultActiveKey="1" centered>
                            <TabPane tab="KPI Dashboard" key="1">
                                Content of Tab Pane 1
                            </TabPane>
                            <TabPane tab="BI Dashboard" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Fleet Dashboard" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>

                    </div>
                </div>


                <div className="features-video-wrapper">
                    <h1 className="fw-bold text-center">Features Video Gallery</h1>
                    <p className="text-center">All the features of the prism is shown in animated video. So you can easily know how the different feature of the prism works</p>

                    <div className="slider-wrapper">
                        <div className="container border">
                            
                                <Slider {...settings}>
                                    <div>
                                        <h3>1</h3>
                                    </div>
                                    <div>
                                        <h3>2</h3>
                                    </div>
                                    <div>
                                        <h3>3</h3>
                                    </div>
                                    <div>
                                        <h3>4</h3>
                                    </div>
                                    <div>
                                        <h3>5</h3>
                                    </div>
                                    <div>
                                        <h3>6</h3>
                                    </div>
                                    <div>
                                        <h3>7</h3>
                                    </div>
                                    <div>
                                        <h3>8</h3>
                                    </div>
                                    <div>
                                        <h3>9</h3>
                                    </div>
                                </Slider>
                            
                        </div>


                    </div>


                </div>




            </div>
        </>
    );
}

export default Features;