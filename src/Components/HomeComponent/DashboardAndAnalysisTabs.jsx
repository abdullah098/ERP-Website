import React from 'react';
import { Tabs } from 'antd';
import DashboardAndAnalysisTabsContent from './DashboardAndAnalysisTabsContent';
import DashboardPic from '../../Assets/Dashboard Design@2x.png';

const DashboardAndAnalysisTabs = () => {

    const { TabPane } = Tabs;

    const tabs = [
        {
            key: '1',
            tab: 'KPI Dashboard',
            src: DashboardPic
        },
        {
            key: '2',
            tab: 'BI Dashboard',
            src: DashboardPic
        },
        {
            key: '3',
            tab: 'Fleet Dashboard',
            src: ''
        }
    ];



    return (
        <>
            <Tabs defaultActiveKey="1" >

                {tabs.map(tab => (
                    <TabPane tab={tab.tab} key={tab.key}>
                        <DashboardAndAnalysisTabsContent src={tab.src} />
                    </TabPane>
                ))}
                
            </Tabs>


            
        </>
    );
}

export default DashboardAndAnalysisTabs;