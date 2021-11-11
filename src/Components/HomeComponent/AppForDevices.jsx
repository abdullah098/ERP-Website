import React from 'react';
import Mobile from '../../Assets/Mobile1x.png';
import StarIcon from '../../Assets/StarIcon.png';
import GooglePlay from '../../Assets/GooglePlay.png';
import CustomCard2 from './../Common/CustomCard2';
import Sales from '../../Assets/sales.svg'


const AppForDevices = () => {


    const card = [
        {
            title: 'Sales Information', 
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            image: Sales,
            link: '/'
        },
        {
            title: 'Account Management', 
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            image: Sales,
            link: '/'
        },
        {
            title: 'Employee Management', 
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            image: Sales,
            link: '/'
        },
        {
            title: 'Help Center', 
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            image: Sales,
            link: '/'
        },
        {
            title: 'Asset Management', 
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            image: Sales,
            link: '/'
        },
        {
            title: 'Purchase History', 
            description: 'This is the best digital tool for all your businesses which you operate online it covers Industries like any.',
            image: Sales,
            link: '/'
        }
    ];


    return (
        <>
            <div className="app-for-devices ">

                {/* app for devices area  */}
                <div className="app-for-devices-content ">
                    <h1 className="fw-bold">
                        Our App For Drivers
                    </h1>
                    <p>We also have app for drivers where they can easily track their deliveries and saved the records of their deliveries how many they delivered and how many are remaining. And the record is also fetched in prsim.</p>


                    <div className="d-flex justify-content-center">
                        <div>
                            <img className="mobile-pic" src={Mobile} alt="" />
                        </div>
                        <div>
                            <h2 className="fw-bold">Our App Features</h2>
                            <ul>
                                <li><h2>Track Record Of Deliveries</h2></li>
                                <li><h2>How Many Assigned Orders</h2></li>
                                <li><h2>How Many Are Delivered</h2></li>
                                <li><h2>How Many Are Remaining</h2></li>
                                <li><h2>Daily Status Of Orders</h2></li>
                                <li><h2>Electronic Signatures</h2></li>
                            </ul>
                            <p className="m-0 fw-bold">Download our App</p>
                            <img src={GooglePlay} alt="" />

                        </div>
                        <div>
                            <img src={StarIcon} alt="" />
                        </div>
                    </div>


                </div>

                {/* almost everything you need  */}

                <div className="almot-everything ">
                    <h1 className="fw-bold">
                        Almost Everything You Need
                    </h1>
                    <p>Prism comes with Different ready to use features to help you run your business</p>

                    <div className="container-fluid">
                        <div className="row">

                        {card.map((item, index) => (
                            <div className="col-md-4 p-0" key={index}>
                                <CustomCard2 
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    link={item.link}
                                />
                            </div>
                        ))}
                            
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default AppForDevices;