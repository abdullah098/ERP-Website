import React from 'react';
// import NavBar from '../../Layouts/NavBar';
import Playlogo from '../../Assets/play-button-o.png';
import DashboardDesignImage from '../../Assets/Dashboard Design@2x.png';

const Home = () => {
    return (
        <>
            <div className="border border-dark hero">
                <div className="hero-content border border-danger">  
                    <div className="mx-auto best-solution text-center border border-danger">
                        <h4>Get a free demo for 14 days</h4>
                        <h1 className="fw-bold">Best Solution For All Your Digital Problems</h1>
                        <p>This is the best digital tool for all your businesses which you operate online it covers Industries like construction, retail stores and gives you ease to get all the records in one place without worrying about.</p>


                    </div>

                    <div className="div-button mx-auto text-center border border-danger">
                        <button className="btn button-demo fw-bold">

                            Request Demo - It's free
                        </button>
                        <button className="btn button-works text-white">
                            <img src={Playlogo} alt="play-button" />
                            How It Works
                        </button>
                    </div>

                    <div className="div-vid bg-white mx-auto text-center ">
                        <img src={DashboardDesignImage} alt="" />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;