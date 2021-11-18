import React from 'react';
import Hero from '../../Components/HomeComponent/Hero';
import Brands from './Brands';
import DashboardAndAnalysis from './DashboardAndAnalysis';
import Solution from './Solution';
import AppForDevices from './AppForDevices';
import FreeDemo from './FreeDemo';

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <Solution />
            <DashboardAndAnalysis />
            <AppForDevices />
            <FreeDemo />

            
        </>
    );
}

export default Home;