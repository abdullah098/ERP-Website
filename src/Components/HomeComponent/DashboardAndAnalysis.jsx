import React from 'react';
import DashboardAndAnalysisTabs from './DashboardAndAnalysisTabs';

const DashboardAndAnalysis = () => {
    return (
        <>
            <div className="dashboard-analysis">
                <div>
                    <div className="container p-0">
                        <div className="dashboard-analysis-content">
                            <h1 className="text-white fw-bold">Complete, Versatile & Powerful Dashboards & Analytics</h1>
                            <p className="text-white">These Dashboard are Designed for both, simplicity and power.</p>

                            <DashboardAndAnalysisTabs />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default DashboardAndAnalysis;