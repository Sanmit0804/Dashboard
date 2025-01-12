import React, { useState, useEffect } from 'react';
import PageHeader from '@/components/shared/pageHeader/PageHeader';
import EstimateAreaChart from '@/components/widgetsCharts/EstimateAreaChart';
import EstimateAreaChartThree from '@/components/widgetsCharts/EstimateAreaChartThree';
import EstimateStatistics from '@/components/widgetsStatistics/EstimateStatistics';
import LinkedInStatisticsCard from '@/components/widgetsStatistics/LinkedInStatisticsCard';
import LinkedInStatisticsChart from '@/components/widgetsStatistics/LinkedInStatisticsChart';
import ChatDrawer from '@/components/widgetsStatistics/ChatDrawer';

const LinkedInStatistics = () => {

    const promptOptions = [
        "Show me a LinkedIn stats dashboard for views and connections.",
        "How to track LinkedIn post reach and shares?",
        "What key metrics should be in a LinkedIn stats dashboard?",
        "Can I monitor LinkedIn search appearances and endorsements?"
      ];

      
    return (
        <>
            <PageHeader >
                <ChatDrawer samplePrompts={promptOptions}/>
            </PageHeader>
            <div className="main-content">
                <div className="row">
                    <LinkedInStatisticsCard />
                    <LinkedInStatisticsChart/>
                </div>
            </div>
        </>
    );
};

export default LinkedInStatistics;
