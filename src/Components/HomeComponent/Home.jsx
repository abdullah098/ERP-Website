import React from 'react';
import Hero from '../../Components/HomeComponent/Hero';
import Brands from './Brands';
import DashboardAndAnalysis from './DashboardAndAnalysis';
import Solution from './Solution';

const Home = () => {
    return (
        <>
            <Hero />
            <Brands />
            <Solution />
            <DashboardAndAnalysis />
        </>
    );
}

export default Home;